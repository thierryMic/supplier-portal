import React from 'react'


/**
* @description Represents a bookshelf
* @constructor
*/
export const TextControl = (props) => {
	return (
		<div className="input">
			<label className="input-label">{props.id}</label>
			<input id={props.id} type="text"
			       value={props.value}
			       onChange={(e) => props.refresh(e)} />
		</div>
	)
}
