import Image from "next/image"
import Underline from "./ui/Underline"
import Link from "next/link"
import Menu from "./ui/Menu"
import { randlongline } from "@/utils/func"
import { useState } from "react"

const Navbar = () => {
    return (
        <div className="relative flex flex-col w-full h-full">
            <div className=" flex w-full h-full justify-between px-3 pt-3">
                <div className="collapse sm:visible">
                    <Image src='/svgs/logo.svg' width={35} height={35} alt=""/>
                </div>
                <div className="flex">
                    <Menu />
                </div>
            </div>
            <div className="w-full lg:-translate-y-2">
                <Underline long />
            </div>
        </div>
    )
}

export default Navbar