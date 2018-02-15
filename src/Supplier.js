import React, { Component } from 'react'
import Input from './components/Input'
import Address from './components/Address'
import {BankDetails} from './components/BankDetails'
import {Contact} from './components/Contact'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { loadSupplier } from './actions/supplierActions'
/**
* @description Represents a bookshelf
* @constructor
*/
class Supplier extends Component {

  	componentDidMount = (
  		fetch(`http://localhost:8000/supplier/JSON/1`)
  			.then((result) => result.json())
  			.then((supp) => this.props.loadSupplier({supplier:supp}))
	)

	/**
	* @description iterates through the books array of the shelf prop and renders a book component
	* for each item
	*/
	render() {

		return (
			<div className="container">
				<div>
					<h4>General</h4>
	        		<Input id = "name" label = "Company name" value={this.props.supplier.name} refreshText={this.refreshText} />
					<Input id = "acn" label = "ACN" value={this.props.supplier.acn} refreshText={this.refreshText} />
					<Input id = "abn" label = "ABN" value={this.props.supplier.abn} refreshText={this.refreshText} />
					<Input id = "phone" label = "Main phone" type="tel" value={this.props.supplier.phone} refreshText={this.refreshText} />
				</div>


				<Address supplier={this.props.supplier} refreshText={this.refreshAddress} loadGoogleAddress={this.loadGoogleAddress} />
				<BankDetails supplier={this.props.supplier} refreshText={this.refreshText} />

				<Contact header = "Primary contact" />
				<Contact header = "Accounts receivable" />
        		<button className="submit-button">Save</button>
        	</div>
	  )
	}
}

function mapStateToProps (state) {
	return {
		supplier:state.supplier
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loadSupplier:loadSupplier,
	},dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(Supplier)