'use client'
import { randButtonBorder } from '@/utils/func'
import Image from 'next/image'
import { useState } from 'react'

export default function RectangleBorder() {
	const randBB = randButtonBorder()

	const [ButtonBorder, setButtonBorder] = useState(randBB ?? 'r1.svg')

	return (
		<Image
			className="absolute"
			src={`/lines/${ButtonBorder}`}
			width={500}
			height={500}
			alt=""
		/>
	)
}
