'use client'
import Underline from '@/components/ui/Underline'
import Image from 'next/image'
import RectangleBorder from '@/components/ui/RectangleBorder'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	function validateEmail(email: string): boolean {
		const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g
		const result = pattern.test(email)
		return !result
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (name === '') {
			toast.error('enter your name')
			return
		}
		if (email === '') {
			toast.error('enter your email')
			return
		}
		if (validateEmail(email)) {
			toast.error('enter valid email address')
			return
		}
		const formData = { name, email, message }

		try {
			toast.loading('please wait...')
			const response = await fetch('/api/send', {
				method: 'POST',
				body: JSON.stringify(formData),
			})

			const data = await response.json()
			if (data.status === 201) {
				toast.success('Form submitted successfully!')
			} else {
				toast.error('Form submission failed.')
				console.log(data.error)
			}
		} catch (error) {
			console.error('Error submitting form:', error)
		}
	}

	return (
		<>
			<div className="relative hidden md:block">
				<Image
					className="absolute lg:left-10 top-28"
					src="/illustration/i2.svg"
					width={470}
					height={450}
					alt=""
				/>
			</div>
			<div className="relative w-full h-full md:pt-16">
				<main className="absolute right-1 w-full md:w-1/2 p-3 sm:p-6 md:p-5 text-justify h-full overflow-y-scroll no-scrollbar">
					<div>
						Contact
						<Underline mid />
					</div>
					<form
						method="post"
						onSubmit={handleSubmit}
					>
						<div className="relative w-full py-2 my-1">
							<label
								htmlFor="name"
								className=""
							>
								Name :
							</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="outline-none w-9/12 bg-transparent pl-2 sm:pl-3 h-8"
							/>
							<div className="absolute -bottom-1 right-0 w-11/12">
								<Underline mid />
							</div>
						</div>
						<div className="relative w-full py-3 my-1">
							<label
								htmlFor="email"
								className=""
							>
								Email :
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="outline-none w-9/12 bg-transparent pl-2 sm:pl-3 h-8 "
							/>
							<div className="absolute -bottom-1 right-0 w-11/12">
								<Underline mid />
							</div>
						</div>
						<div className="relative w-full py-3 my-1 flex">
							<label
								htmlFor="message"
								className=""
							>
								Message :
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="outline-none w-9/12 bg-transparent pl-2 sm:pl-3 h-16 no-scrollbar"
							/>
							<div className="absolute -bottom-1 right-0 w-10/12">
								<Underline mid />
							</div>
						</div>
						<div className="relative w-40 h-20">
							<button
								className="w-full hover:scale-105 transition"
								type="submit"
							>
								<RectangleBorder />
								<div className="text-center pt-5">Submit</div>
							</button>
						</div>
					</form>
				</main>
			</div>
		</>
	)
}
