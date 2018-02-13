import React from 'react'
import Input from './Input'

/**
* @description Represents a bookshelf
* @constructor
*/
export const Contact = (props) => {
	return (
		<div>
			<h4>{props.header}</h4>
			<Input id = "Name" label = "Name" />
			<Input id = "Title" label = "Title"/>
			<Input id = "email" label = "Email"/>
			<Input id = "mainPhone" label = "Phone"/>
			<Input id = "mobile" label = "Mobile"/>
		</div>
	)
}
