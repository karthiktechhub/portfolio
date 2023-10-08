import React from 'react'

type emailProps = {
	name?: string
	email?: string
	message?: string
}

const Email = ({ name, email, message }: emailProps) => {
	return (
		<div>
			<p>Name : {name}</p>
			<p>Email : {email}</p>
			<p>Message : {message}</p>
		</div>
	)
}

export default Email
