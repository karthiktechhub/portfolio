// 'use client'
import { Image } from "next/image"
import lines from '@/store/index'
const Underline = () => {
    const rand = Math.floor(Math.random() * 8) + 1
    console.log(lines)
    return (
        <div>
            lines
        </div>
    )
}

export default Underline

