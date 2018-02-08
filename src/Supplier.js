import React, { Component } from 'react'
import Input from './Input'
import Address from './Address'

/**
* @description Represents a bookshelf
* @constructor
*/
class Supplier extends Component {



  state = {
    /**
    * @description books - the list of all books in the user's library
    */
    	supplier: {name:"testSupplier"},
  	}

	/**
	* @description iterates through the books array of the shelf prop and renders a book component
	* for each item
	*/
	render() {

		return (
			<div className="supplier-frame">

        		<Input
					id = "name"
					label = "Company name"
				/>

				<Input
					id = "abn"
					label = "ABN"
				/>

        		<Input
					id = "email"
					label = "Email"
					type = "email"
				/>

				<Input
					id = "phone"
					label = "Main phone"
					type="tel"
				/>

				<Address/>

        		<button className="submit-button">Save</button>
        	</div>
	  )
	}
}


export default Supplier