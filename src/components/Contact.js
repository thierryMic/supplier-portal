import React from 'react'
import Input from './Input'

/**
* @description Represents a bookshelf
* @constructor
*/
export const Contact = (props) => {

	const { name, title, email, phone, mobile } = props.contact
	const { edit, uid} = props

	return (
			<div>
				<h4>{props.header}</h4>
				<Input id="name" label="Name" value={name} edit={edit} uid={uid} />
				<Input id="title" label="Title" value={title} edit={edit} uid={uid} />
				<Input id="email" label="Email" value={email} edit={edit} uid={uid} />
				<Input id="phone" label="Phone" value={phone} edit={edit} uid={uid} />
				<Input id="mobile" label="Mobile" value={mobile} edit={edit} uid={uid} />
			</div>
	)
}
