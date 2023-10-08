import ResumeButton from '@/components/ui/ResumeButton'
import CustomButton from '@/components/ui/ResumeButton'
import Underline from '@/components/ui/Underline'
import Image from 'next/image'

export default function About() {
	return (
		<>
			<div className="relative hidden sm:block">
				<Image
					className="absolute left-2 md:left-10 lg:left-20 top-6"
					src="/illustration/i4.svg"
					width={370}
					height={350}
					alt=""
				/>
			</div>
			<div className="relative w-full h-full">
				<main className="absolute right-1 w-full sm:w-1/2 p-6 sm:p-3 md:p-5 text-justify h-full overflow-y-scroll no-scrollbar">
					<div className="">
						Motivation and dedicated software developer with a strong education
						background and a passion for solving complex problems through
						innovative coding solutions. Eager to leverage technical skills and
						creativity to contribute effectively in a dynamic software
						development team.
					</div>
					<div className="pt-4">Technologies I have used</div>
					<div>
						<Underline mid />
					</div>
					<div className="flex gap-5 flex-wrap content-start items-start">
						<div>HTML</div>
						<div></div>
						<div>CSS</div>
						<div></div>
						<div>JavaScript</div>
						<div></div>
						<div>MySQL</div>
						<div></div>
						<div>React.js</div>
						<div></div>
						<div>Next.js</div>
						<div></div>
						<div>MongoDB</div>
						<div></div>
						<div>SharePoint</div>
						<div></div>
						<div>ShadcnUI</div>
						<div></div>
						<div>TailwindCSS</div>
						<div></div>
						<div>Prisma</div>
						<div></div>
						<div>trpc</div>
						<div></div>
						<div>MaterialUI</div>
						<div></div>
					</div>
					<div className="w-40 h-20">
						<ResumeButton text="Resume" />
					</div>
				</main>
			</div>
		</>
	)
}
