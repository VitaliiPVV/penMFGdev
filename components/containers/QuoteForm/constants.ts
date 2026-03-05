import { FormValues } from './types'

export const steps: { title?: string; id: number }[] = [
	{
		id: 1,
		title: 'Contact Information',
	},
	{
		id: 2,
		title: 'Upload Your Files',
	},
	{
		id: 3,
		title: 'Finish',
	},
	{
		id: 4,
	},
]

export const defaultValues: FormValues = {
	fullName: '',
	companyName: '',
	email: '',
	phone: '',
	website: '',
	address: '',
	state: null,
	city: null,
	zipcode: '',
	files: [],
	date: '',
	message: '',
	source: '',
	landing_page: '',
	referrer_page: '',
	fbclid: '',
	gclid: '',
	msclkid: '',
	utm_campaign: '',
	utm_content: '',
	utm_medium: '',
	utm_source: '',
	utm_term: '',
}
