import React from 'react'
import Input from './Input'

/**
* @description Represents a bookshelf
* @constructor
*/
export const Contact = (props) => {

	const { id, name, title, email, phone, mobile } = props.contact
	const { edit } = props

	return (
			<div>
				<h4>{props.header}</h4>
				<Input id="name" label="Name" value={name} edit={edit} uid={id} />
				<Input id="title" label="Title" value={title} edit={edit} uid={id} />
				<Input id="email" label="Email" value={email} edit={edit} uid={id} />
				<Input id="phone" label="Phone" value={phone} edit={edit} uid={id} />
				<Input id="mobile" label="Mobile" value={mobile} edit={edit} uid={id} />
			</div>
	)
}
