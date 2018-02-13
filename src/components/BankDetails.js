import React from 'react'
import Input from './Input'

/**
* @description Represents a bookshelf
* @constructor
*/
export const BankDetails = (props) => {
	return (
		<div>
			<h4>Bank details</h4>
			<Input id = "acName" label = "Account name" value={props.supplier.acName} refreshText={props.refreshText} />
			<Input id = "bsb" label = "Bsb" value={props.supplier.bsb} refreshText={props.refreshText} />
			<Input id = "acNumber" label = "Account number" value={props.supplier.acNumber} refreshText={props.refreshText} />
		</div>
	)
}
