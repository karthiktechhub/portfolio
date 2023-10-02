
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="relative hidden sm:block">
                <Image className="absolute right-2 md:right-10 lg:right-20 top-20" src='/illustration/i3.svg' width={500} height={500} alt="" />
            </div>
        <main className='container mx-auto'>
            <div className="w-full pl-9">
                <div className="text-6xl lg:pl-9 pt-16 tracking flex flex-col">
                    <div>
                        Hey, I'm
                    </div>
                    <div className="flex gap-3 flex-col">
                        <div>
                        Karthik
                        </div>
                        <div className="hidden sm:block">
                            K R
                        </div>
                    </div>
                    <div>Full Stack</div>
                    <div>Developer</div>
                </div>
                <div className="pt-7 pl-7 text-3xl flex gap-3">
                    <span>Hire me</span>
                    <Image src='/lines/arrow.svg' width={40} height={30} alt="" />
                </div>
            </div>
        </main>

        </>
    )
}
