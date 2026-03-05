import Footer from '@/components/containers/Footer'
import Header from '@/components/containers/Header'
import {
	LocalBusinessSchema,
	OrganizationSchema,
} from '@/components/StructuredData'
import type { Metadata } from 'next'
import { Geist_Mono, Montserrat } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { ChatbotScript } from '@/components/containers'
import './globals.css'

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const montserrat = Montserrat({
	variable: '--font-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	),
	title: {
		default:
			'Pen Manufacturing - Custom Metal Fabrication, CNC Machining & Welding',
		template: '%s | Pen Manufacturing',
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: '32x32' },
			{ url: '/icon.png', type: 'image/png', sizes: '512x512' },
		],
		apple: '/apple-icon.png',
	},
	description:
		'Leading Southern California metal fabricator since 1982. Custom metal fabrication, precision CNC machining, MIG/TIG welding services in Anaheim, Orange County.',
	keywords: [
		'metal fabrication',
		'CNC machining',
		'welding services',
		'custom metal fabrication',
		'Southern California',
		'Orange County',
		'Anaheim',
		'precision machining',
		'MIG welding',
		'TIG welding',
		'aluminum fabrication',
		'stainless steel fabrication',
	],
	authors: [{ name: 'Pen Manufacturing' }],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.pen-mfg.com',
		siteName: 'Pen Manufacturing',
		title: 'Pen Manufacturing - Custom Metal Fabrication & CNC Machining',
		description:
			'Leading Southern California metal fabricator since 1982. Custom metal fabrication, precision CNC machining, and welding services.',
		images: [
			{
				url: 'https://www.pen-mfg.com/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Pen Manufacturing - Metal Fabrication',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Pen Manufacturing',
		description:
			'Custom Metal Fabrication, CNC Machining & Welding - Southern California',
		images: ['https://www.pen-mfg.com/images/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${geistMono.variable} antialiased`}
			>
				<GoogleTagManager gtmId="GTM-TK35P49F" />
				<OrganizationSchema />
				<LocalBusinessSchema />
				<Header />
				<main className="mt-[65px] 2xl:mt-[79px]">{children}</main>
				<Footer />
				<ChatbotScript />
			</body>
		</html>
	)
}
