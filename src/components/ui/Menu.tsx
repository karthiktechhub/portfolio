
import Link from "next/link";
import Underline from "./Underline";
import {menuData } from '@/utils/store'
const Menu = () => {
    // console.log(menuData)
    return (
        <div className="flex gap-8 justify-between items-center">
        {Object.keys(menuData).map((item) =>{
            return (
                <div className="group flex flex-col">
                    <Link className="text-center" href='/' >
                        {/* @ts-expect-error */}
                        {menuData[item]}
                    </Link>
                    <div className="scale-0 group-hover:scale-100 ">
                        <Underline />
                    </div>
                </div>
            )
        })
        }
        <div>
            <Link href='/'>
                O0
            </Link>
        </div>
    </div>
    )
}

export default Menu;