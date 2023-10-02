'use client'
import { randButtonBorder } from "@/utils/func"
import Image from "next/image"
import { useState } from "react"

export default function CustomButton() {
    const randBB = randButtonBorder()

    const [ButtonBorder, setButtonBorder] = useState(
        randBB ?? 'r1.svg'
    )

    return (
        <div className="relative w-full h-full">
            <Image className="absolute" src={`/lines/${ButtonBorder}`} width={500} height={500} alt="" />
            
        </div>
    )
}