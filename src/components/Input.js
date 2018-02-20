import React from 'react'


/**
* @description Represents a bookshelf
* @constructor
*/



const Input = (props) => {
	const { label, id, type, value, edit, uid } = props

	return(
		<div className="input">
			<label className="input-label">{label}</label>
			<input
				id={id}
				className="input-text"
				type={type ? type : "text"}
				value={value}
				onChange={(event) => edit(event, uid)}
			/>
		</div>
		)
}

export default Input