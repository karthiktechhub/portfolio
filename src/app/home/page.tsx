'use client'
import Image from "next/image";

export default function Home() {
    return (
        <>
        <main className='flex'>
            <div className="w-full pl-9">
                <div className="text-6xl sm:text-7xl pt-16 tracking flex flex-col">
                    <div>
                        Hey, I'm
                    </div>
                    <div className="flex gap-3 flex-col sm:flex-row">
                        <div>
                        Karthik
                        </div>
                        <div>
                            K R
                        </div>
                    </div>
                    <div>Full Stack</div>
                    <div>Developer</div>
                </div>
                <div className="pt-7 pl-7 text-3xl flex gap-3">
                    <span>Hire me</span>
                    <Image src='/svgs/arrow.svg' width={40} height={30} alt="" />
                </div>
            </div>
        </main>
        </>
    )
}