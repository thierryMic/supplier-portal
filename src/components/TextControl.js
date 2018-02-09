import React from 'react'


/**
* @description Represents a bookshelf
* @constructor
*/
export const TextControl = (props) => {
	return (
		<div className="input">
			<label className="input-label">Country</label>
			<input id={props.id} type="text"
			       value={props.value}
			       onChange={(e) => this.refreshText(e)} />
		</div>
	)
}
