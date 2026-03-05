import usaLocations from '@/constants/usa-locations.json'
import { Attribution } from './types'

export const getStateOptions = () => {
	const stateNames = Object.keys(usaLocations)
	return stateNames.map((stateName, index) => ({
		id: index + 1,
		value: stateName,
		name: stateName,
	}))
}

export const getCityOptions = (stateName: string) => {
	const cities = usaLocations[stateName as keyof typeof usaLocations] || []
	return cities.map((city, index) => ({
		id: index + 1,
		value: city,
		name: city,
	}))
}

export const readCookie = (name: string) => {
	if (typeof document === 'undefined') return null
	const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
	return m ? decodeURIComponent(m[1]) : null
}

export const getAttribution = (): Attribution => {
	if (typeof window === 'undefined') return {}

	const params = new URLSearchParams(window.location.search)

	const fromUrl: Attribution = {
		utm_source: params.get('utm_source') ?? undefined,
		utm_medium: params.get('utm_medium') ?? undefined,
		utm_campaign: params.get('utm_campaign') ?? undefined,
		utm_term: params.get('utm_term') ?? undefined,
		utm_content: params.get('utm_content') ?? undefined,
		gclid: params.get('gclid') ?? undefined,
		fbclid: params.get('fbclid') ?? undefined,
		msclkid: params.get('msclkid') ?? undefined,
	}

	const fromStorage: Attribution = {
		utm_source: localStorage.getItem('utm_source') ?? undefined,
		utm_medium: localStorage.getItem('utm_medium') ?? undefined,
		utm_campaign: localStorage.getItem('utm_campaign') ?? undefined,
		utm_term: localStorage.getItem('utm_term') ?? undefined,
		utm_content: localStorage.getItem('utm_content') ?? undefined,
		gclid: localStorage.getItem('gclid') ?? undefined,
		fbclid: localStorage.getItem('fbclid') ?? undefined,
		msclkid: localStorage.getItem('msclkid') ?? undefined,
	}

	const fromCookies: Attribution = {
		gclid: readCookie('gclid') ?? readCookie('_gcl_aw') ?? undefined,
	}

	return {
		...fromStorage,
		...fromCookies,
		...fromUrl,
	}
}
