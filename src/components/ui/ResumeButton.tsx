'use client'
import { randButtonBorder } from '@/utils/func'
import Image from 'next/image'
import { useState } from 'react'

type BtnProps = {
	text: string
}

export default function ResumeButton({ text }: BtnProps) {
	const randBB = randButtonBorder()

	const [ButtonBorder, setButtonBorder] = useState(randBB ?? 'r1.svg')

	const handleDownload = () => {
		const fileName = 'Karthik_resume.pdf'

		const downloadUrl = `https://drive.google.com/file/d/1S9tPdtgCwz_KJSOQW4FCo0ICw7khLqBd/view?usp=sharing`

		const link = document.createElement('a')
		link.href = downloadUrl
		link.download = fileName
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const handleSubmit = () => {}

	return (
		<div className="relative w-full h-full">
			<button
				className="w-full hover:scale-105 transition"
				onClick={handleDownload}
			>
				<Image
					className="absolute"
					src={`/lines/${ButtonBorder}`}
					width={500}
					height={500}
					alt=""
				/>
				<div className="text-center pt-5">{text}</div>
			</button>
		</div>
	)
}
