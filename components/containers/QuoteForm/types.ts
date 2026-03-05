import { DropdownOption } from '@/components/ui/Dropdown'

export interface QuoteFormBase {
	fullName: string
	companyName: string
	email: string
	phone?: string
	website?: string
	address?: string
	zipcode?: string
	message?: string
	source?: string
	landing_page?: string
	referrer_page?: string
}

export interface QuoteFormProps {
	className?: string
	hasTitle?: boolean
	type?: string
	buttonLabel?: string
	heading?: string
	fileInputClassName?: string
}

export interface Attribution {
	utm_source?: string
	utm_medium?: string
	utm_campaign?: string
	utm_term?: string
	utm_content?: string
	gclid?: string
	fbclid?: string
	msclkid?: string
}

export type FormValues = QuoteFormBase &
	Attribution & {
		state: DropdownOption | null
		city: DropdownOption | null
		files: File[]
		date?: string
	}

export type QuoteFormPayload = QuoteFormBase &
	Attribution & {
		state: string | null
		city: string | null
		files: File[]
		date?: string | null
	}
