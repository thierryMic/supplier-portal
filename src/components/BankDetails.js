import React from 'react'
import Input from './Input'

/**
* @description Represents a bookshelf
* @constructor
*/
export const BankDetails = (props) => {

	const { edit } = props
	const { acName, bsb, acNumber } = props.supplier;

	return (
		<div>
			<h4>Bank details</h4>
			<Input id = "acName" label = "Account name" value={acName} edit={edit} />
			<Input id = "bsb" label = "Bsb" value={bsb} edit={edit} />
			<Input id = "acNumber" label = "Account number" value={acNumber} edit={edit} />
		</div>
	)
}
