import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
* @description Represents a bookshelf
* @constructor
*/
class Supplier extends Component {
	static propTypes = {
		
	}


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
		const {supplier} = this.props

		return (
			<div className="bookshelf">
				<h2>TEST</h2>
				<h2 className="bookshelf-title">{this.state.supplier.name}</h2>
        	</div>
	  )
	}
}


export default Supplier