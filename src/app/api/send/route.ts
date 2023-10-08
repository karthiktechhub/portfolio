// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import Email from '@/components/ui/email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
	const response = await req.json()
	// console.log(response)
	const { name, email, message } = response

	try {
		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'karthikkhoday29@gmail.com',
			subject: 'Contact Information',
			react: Email({ name, email, message }),
		})

		return NextResponse.json({ status: 201 })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
