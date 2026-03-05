'use client'

import { CancelIcon, CheckCircleIcon } from '@/components/icons'
import {
	Button,
	DatePickerInput,
	DropdownInput,
	FileInput,
	Heading,
	TextareaInput,
	TextInput,
} from '@/components/ui'
import { FORM_RESET_DELAY } from '@/constants'
import { reverseDate } from '@/lib/dateUtils'
import { generateFilesLog, postEntry } from '@/lib/strapi/strapi'
import { createDeal } from '@/lib/salesmate/salesmate'
import ReCaptchaModal from '@/components/ReCaptchaModal'
import { useClickOutsideModal } from '@/hooks'
import { useState, useMemo, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { defaultValues, steps } from './constants'
import { getStateOptions, getCityOptions, getAttribution } from './utils'
import { FormValues, QuoteFormPayload, QuoteFormProps } from './types'
import { twMerge } from 'tailwind-merge'

const QuoteForm = ({
	className = '',
	hasTitle = true,
	type,
	buttonLabel,
	heading,
	fileInputClassName,
}: QuoteFormProps = {}) => {
	const [currentStepId, setCurrentStepId] = useState(steps[0].id)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const captchaModalRef = useRef<HTMLDivElement>(null)
	const [showCaptchaModal, setShowCaptchaModal] = useClickOutsideModal(
		captchaModalRef,
		false,
	)

	const methods = useForm<FormValues>({
		mode: 'onChange',
		defaultValues,
	})

	const {
		handleSubmit,
		reset,
		getValues,
		watch,
		setValue,
		formState: { errors },
	} = methods

	const selectedState = watch('state')

	const stateOptions = useMemo(() => {
		return getStateOptions()
	}, [])

	const cityOptions = useMemo(() => {
		if (!selectedState?.value) return []
		return getCityOptions(selectedState.value as string)
	}, [selectedState])

	useEffect(() => {
		setValue('state', null)
		setValue('city', null)
	}, [setValue])

	useEffect(() => {
		setValue('city', null)
	}, [selectedState, setValue])

	// Ref to persist retry counter across setTimeout callbacks
	const utmRetryAttemptsRef = useRef(0)

	// Read UTM tracking values from localStorage (populated by GTM)
	useEffect(() => {
		// SSR guard
		if (typeof window === 'undefined') {
			return () => {}
		}

		let isMounted = true
		let timeoutId: ReturnType<typeof setTimeout> | null = null
		const maxAttempts = 10

		// Reset attempts on effect run
		utmRetryAttemptsRef.current = 0

		const trySetValues = () => {
			if (!isMounted) return

			const firstLanding = localStorage.getItem('firstLanding')
			const firstReferrer = localStorage.getItem('firstReferrer')

			// If we found values, set them
			if (firstLanding || firstReferrer) {
				if (firstLanding) {
					setValue('landing_page', firstLanding)
				}
				if (firstReferrer) {
					setValue('referrer_page', firstReferrer)
				}
				return
			}

			// If no values found and we haven't exceeded max attempts, try again
			utmRetryAttemptsRef.current++
			if (utmRetryAttemptsRef.current < maxAttempts && isMounted) {
				// First attempt after 2s, then check every 1s
				const delay = utmRetryAttemptsRef.current === 1 ? 2000 : 1000
				timeoutId = setTimeout(trySetValues, delay)
			}
		}

		trySetValues()

		// Cleanup: clear pending timeout and mark as unmounted
		return () => {
			isMounted = false
			if (timeoutId !== null) {
				clearTimeout(timeoutId)
			}
		}
	}, [setValue])

	useEffect(() => {
		if (typeof window === 'undefined') return
		const attributes = getAttribution()

		Object.entries(attributes).forEach(([key, value]) => {
			if (value) {
				localStorage.setItem(key, value)
				setValue(key as keyof FormValues, value)
			}
		})
	}, [])

	const currentStep = steps.find(({ id }) => id === currentStepId)!
	const isFirstStep = currentStep.id === steps[0].id
	const isSecondStep = currentStep.id === steps[1].id
	const isThirdStep = currentStep.id === steps[2].id
	const isLastStep = currentStep.id === steps[3].id
	const hasErrors = Object.keys(errors).length > 0

	const postQuoteForm = async (values: QuoteFormPayload) => {
		try {
			setIsLoading(true)

			const attributes = getAttribution()

			const { uploadedFiles } = await postEntry<QuoteFormPayload>(
				'quote-forms',
				undefined,
				{
					body: {
						...values,
						...attributes,
					},
				},
			)

			await createDeal(values, uploadedFiles, attributes)

			return true
		} catch (error) {
			console.error('Error posting quote form data:', error)
			await postEntry('quote-form-logs', undefined, {
				body: {
					email: values.email,
					isFilesAttached: values.files && values.files.length > 0,
					log:
						generateFilesLog(values.files, values) +
						`\nError: ${error instanceof Error ? error.message : String(error)}`,
				},
			})
			return false
		} finally {
			setIsLoading(false)
		}
	}

	const onSubmit = handleSubmit(async () => {
		if (isThirdStep) {
			if (process.env.NODE_ENV === 'development') {
				await handleCaptchaVerify('dev-bypass-token')
			} else {
				setShowCaptchaModal(true)
			}
		} else {
			setCurrentStepId((prev) => prev + 1)
		}
	})

	const handleCaptchaVerify = async (token: string) => {
		setIsError(false)
		setIsLoading(true)

		try {
			const verifyResponse = await fetch('/api/verify-recaptcha', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ token }),
			})

			const verifyData = await verifyResponse.json()

			if (!verifyData.success) {
				console.error('reCAPTCHA verification failed:', verifyData.message)
				setIsError(true)
				setCurrentStepId((prev) => prev + 1)
				setTimeout(() => {
					setIsError(false)
					setCurrentStepId(steps[0].id)
				}, FORM_RESET_DELAY)
				return
			}

			const formData = getValues()
			const success = await postQuoteForm({
				...formData,
				fullName: formData.fullName.trim(),
				companyName: formData.companyName.trim(),
				email: formData.email.trim(),
				phone: formData.phone?.trim(),
				website: formData.website?.trim(),
				address: formData.address?.trim(),
				zipcode: formData.zipcode?.trim(),
				source: formData.source?.trim(),
				message: formData.message?.trim(),
				state: formData.state?.value as string,
				city: formData.city?.value as string,
				date: reverseDate(formData.date ?? ''),
				landing_page: formData.landing_page,
				referrer_page: formData.referrer_page,
			})

			if (success) {
				reset()
				setTimeout(() => setCurrentStepId(steps[0].id), FORM_RESET_DELAY)
				setCurrentStepId((prev) => prev + 1)
			} else {
				setIsError(true)
				setCurrentStepId((prev) => prev + 1)
				setTimeout(() => {
					setIsError(false)
					setCurrentStepId(steps[0].id)
				}, FORM_RESET_DELAY)
			}
		} catch (error) {
			console.error('Error during form submission:', error)
			setIsError(true)
			setCurrentStepId((prev) => prev + 1)
			setTimeout(() => {
				setIsError(false)
				setCurrentStepId(steps[0].id)
			}, FORM_RESET_DELAY)
		} finally {
			setIsLoading(false)
		}
	}

	const handleCaptchaClose = () => {
		setShowCaptchaModal(false)
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={onSubmit}
				aria-label="Quote form"
				className={twMerge(
					`flex flex-col items-center w-full py-8 2xl:py-8 rounded-[24px] bg-white`,
					isLastStep || isError
						? 'justify-center min-h-[400px] 2xl:min-h-[686px]'
						: 'justify-between 2xl:min-h-[686px]',
					className,
				)}
			>
				{/* Hidden fields for GTM tracking */}
				<input
					type="hidden"
					id="landing_page"
					{...methods.register('landing_page')}
				/>
				<input
					type="hidden"
					id="referrer_page"
					{...methods.register('referrer_page')}
				/>
				<input
					type="hidden"
					id="utm_source"
					{...methods.register('utm_source')}
				/>
				<input
					type="hidden"
					id="utm_medium"
					{...methods.register('utm_medium')}
				/>
				<input
					type="hidden"
					id="utm_campaign"
					{...methods.register('utm_campaign')}
				/>
				<input type="hidden" id="utm_term" {...methods.register('utm_term')} />
				<input
					type="hidden"
					id="utm_content"
					{...methods.register('utm_content')}
				/>
				<input type="hidden" id="gclid" {...methods.register('gclid')} />

				<div className="w-full flex flex-col gap-12 items-center">
					<div className='flex flex-col items-center gap-3'>
						{hasTitle && (
							<Heading
								as="h3"
								className="text-xl leading-tight font-bold text-center"
							>
								Get a Fast, Professional Estimate
							</Heading>
						)}
						<Heading
							as="h4"
							className="text-[18px] leading-6 font-medium text-center"
						>
							Let&apos;s get your project off the ground with our custom
							manufacturing services. Contact us today to speak with an expert
							about your fabrication needs.
						</Heading>
					</div>

					<div
						className={`flex ${
							isLastStep || isError
								? 'items-center justify-center'
								: 'items-start justify-start'
						} ${isLastStep || isError ? 'flex-1' : 'w-full'} w-full`}
					>
						{isFirstStep && (
							<div
								className={`w-full 2xl:max-h-[476px] 2xl:pr-2 ${
									hasErrors ? 'overflow-y-auto p-1 -m-1' : ''
								}`}
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-6 w-full">
									<TextInput
										id="fullName"
										label="Full name"
										placeholder="Ava Wright"
										required
									/>

									<TextInput
										id="companyName"
										label="Company name"
										placeholder="XYZ Engineering"
										required
									/>

									<TextInput
										id="email"
										label="Work email address"
										type="email"
										placeholder="ava.wright@xyz.com"
										required
									/>

									<TextInput
										id="phone"
										type="tel"
										label="Work phone number"
										placeholder="+1 (333) 000-0000"
									/>

									<TextInput
										id="website"
										label="Company website"
										placeholder="https://www.xyzengineering.com"
									/>

									<TextInput
										id="address"
										label="Company address"
										placeholder="123 Harbor Drive"
									/>

									<DropdownInput
										id="state"
										label="State"
										placeholder="Alaska"
										options={stateOptions}
										required
									/>

									<DropdownInput
										id="city"
										label="City"
										placeholder="Anchorage"
										options={cityOptions}
										required
										disabled={!selectedState}
									/>

									<TextInput
										id="zipcode"
										label="Company zip code"
										placeholder="99501-1234"
									/>
								</div>
							</div>
						)}

						{isSecondStep && (
							<div className="w-full 2xl:max-h-[476px] 2xl:overflow-y-auto 2xl:pr-2 2xl:p-1 2xl:-m-1">
								<FileInput
									id="files"
									label="Upload NDA and/or drawings"
									inputClassName={
										fileInputClassName || 'h-[193px] md:h-[230px] 2xl:h-[273px]'
									}
									required
									maxTotalSize={50 * 1024 * 1024}
								/>
							</div>
						)}

						{isThirdStep && (
							<div
								className={`w-full 2xl:max-h-[476px] 2xl:pr-2 ${
									hasErrors ? '2xl:overflow-y-auto 2xl:p-1 2xl:-m-1' : ''
								}`}
							>
								<div className="grid grid-cols-1 gap-4 2xl:gap-6">
									<DatePickerInput
										id="date"
										label="Date"
										placeholder="06-12-2025"
									/>

									<TextareaInput
										id="message"
										label="What else should we know about your project?"
										placeholder="Need to do asap"
									/>

									<TextInput
										id="source"
										label="How did you hear about us?"
										placeholder="From friends of mine"
										required
									/>
								</div>
							</div>
						)}

						{isLastStep && !isError && (
							<div className="flex flex-col items-center justify-center gap-y-3 h-full w-full">
								<CheckCircleIcon className="size-[70px] text-brand-primary" />
								<Heading
									as="h2"
									className="text-[18px] md:text-[24px] leading-[32px] font-bold text-neutral"
								>
									Quote Submitted Successfully!
								</Heading>

								<p className="max-w-[417px] text-sm text-center leading-[125%] font-medium text-muted">
									Thank you! Your request has been received and our team will
									get back to you shortly.
								</p>
							</div>
						)}

						{isError && (
							<div className="flex flex-col items-center justify-center gap-y-3 h-full w-full">
								<CancelIcon className="size-[70px] text-destructive" />
								<Heading
									as="h2"
									className="text-[18px] md:text-[24px] leading-[32px] font-bold text-neutral"
								>
									Quote Submission Failed
								</Heading>

								<p className="max-w-[417px] text-sm text-center leading-[125%] font-medium text-muted">
									Something went wrong. Please try again later or contact our
									support team if the issue persists.
								</p>
							</div>
						)}
					</div>
				</div>

				{!isLastStep && !isError && (
					<div
						className={`flex gap-x-2.5 2xl:px-8 ${
							isFirstStep ? 'md:justify-end' : 'md:justify-between'
						} w-full mt-3xl`}
					>
						{!isFirstStep && (
							<Button
								size="lg"
								variant="outline"
								className="w-full md:w-fit"
								disabled={isLoading}
								onClick={() => setCurrentStepId((prev) => prev - 1)}
							>
								Back
							</Button>
						)}

						<Button
							size="lg"
							type="submit"
							className="w-full md:w-fit"
							loading={isLoading}
						>
							{isThirdStep ? 'Submit' : 'Next'}
						</Button>
					</div>
				)}
			</form>

			<ReCaptchaModal
				ref={captchaModalRef}
				isOpen={showCaptchaModal}
				onClose={handleCaptchaClose}
				onVerify={handleCaptchaVerify}
			/>
		</FormProvider>
	)
}

export default QuoteForm
