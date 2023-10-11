import Image from 'next/image'
import Underline from './ui/Underline'
import Link from 'next/link'
import Menu from './ui/Menu'
import { randlongline } from '@/utils/func'
import { useState } from 'react'

const Navbar = () => {
	return (
		<div className="relative flex flex-col w-full h-full">
			<div className=" flex w-full h-full justify-center sm:justify-between px-1 pt-1 sm:px-3 sm:pt-3">
				<div className="hidden sm:block px-3">
					<Image
						src="/lines/logo.svg"
						width={35}
						height={35}
						alt=""
					/>
				</div>
				<div className="flex px-3">
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
