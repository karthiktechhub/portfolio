'use client'
import Link from "next/link";
import Underline from "./Underline";
import {menuData } from '@/utils/store'
import { usePathname } from "next/navigation";
const Menu = () => {
    const path = usePathname()
    console.log(path)
    // console.log(menuData)
    return (
        <div className="flex gap-8 justify-between items-center group/top">
        {Object.keys(menuData).map((item) =>{
            return (
                <div className="group flex flex-col">
                    <Link className='text-center' href={`/${item}`} >
                        {/* @ts-expect-error */}
                        {menuData[item]}
                    </Link>
                    <div className={`scale-0 group-hover:scale-100 ${path === `/${item}` ? 'scale-100' : '' }`}>
                        <Underline />
                    </div>
                </div>
            )
        })
        }
    </div>
    )
}

export default Menu;