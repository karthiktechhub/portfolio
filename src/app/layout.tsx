import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import localFont from 'next/font/local'
import ParticleContainer from '@/components/ui/ParticleContainer'
import { Toaster } from 'sonner'

const inter = localFont({
	src: 'fonts/Virgil.woff2',
})

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'My Portfolio Website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ParticleContainer />
				<div className="bg-slate-50">
					<div className="relative h-screen">
						<div className="absolute h-16 w-full top-0 left-0">
							<Navbar />
						</div>
						<div className="p-2 h-full pt-20 overflow-hidden">
							{children}
							<Toaster
								richColors
								visibleToasts={1}
							/>
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
