import React from 'react'


/**
* @description Represents a bookshelf
* @constructor
*/



const Input = (props) => (
	<div className="input">
		<label className="input-label">{props.label}</label>
		<input
			id={props.id}
			className="input-text"
			type={props.type ? props.type : "text"}
			value={props.value}
			onChange={(event) => props.refreshText(event)}
		/>
	</div>
)

export default Input