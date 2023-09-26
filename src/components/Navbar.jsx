import Image from "next/image"
import Underline from "./ui/Underline"

const Navbar = () => {
    return (
        <div className="relative flex flex-col w-full h-full">
            <div className=" flex w-full h-full justify-between p-3">
                <div>
                    <Image src='/svgs/logo.svg' width={35} height={35}/>
                </div>
                <div className="flex gap-8 justify-between items-center">
                    <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                    <div>Contact Me</div>
                    <div> <Underline/></div>
                </div>
            </div>
            <div className="w-full">
                <Image className="w-full"
                    src='/svgs/ll1.svg' 
                    width={2000}
                    height={100}
                    />
            </div>
        </div>
    )
}

export default Navbar