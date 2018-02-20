import React, { Component } from 'react'
import Input from './components/Input'
import Address from './components/Address'
import {BankDetails} from './components/BankDetails'
import {Contact} from './components/Contact'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadSupplier, editSupplier, loadAddress, editAddress, loadContacts, editContact } from './actions/supplierActions'
/**
* @description Represents a bookshelf
* @constructor
*/
class Supplier extends Component {

	loadRecord = (supplier) => {
		this.props.loadSupplier(supplier.supplier);
		this.props.loadContacts(supplier.contacts);
	}

  	componentDidMount = (
  		fetch(`http://localhost:8000/supplier/JSON/1`)
  			.then((result) => result.json())
  			.then((supplier) => this.loadRecord(supplier))
	)

	/**
	* @description iterates through the books array of the shelf prop and renders a book component
	* for each item
	*/
	render() {

		const {supplier, contacts, editSupplier, editAddress, loadAddress, editContact} = this.props;
		const {name, acn, abn, phone, primaryContactId, arContactId } = this.props.supplier;

		return (
			<div className="container">
				<div>
					<h4>General</h4>
	        		<Input id = "name" label = "Company name" value={name} edit={editSupplier} />
					<Input id = "acn" label = "ACN" value={acn} edit={editSupplier} />
					<Input id = "abn" label = "ABN" value={abn} edit={editSupplier} />
					<Input id = "phone" label = "Main phone" type="tel" value={phone} edit={editSupplier} />
				</div>


				<Address supplier={supplier} edit={editAddress} load={loadAddress} />
				<BankDetails supplier={supplier} edit={editSupplier} />

				<Contact header = "Primary contact"
						 contact={contacts[primaryContactId] || {}}
						 edit={editContact}
					/>
				}

				<Contact header = "Accounts receivable contact"
						 contact={contacts[arContactId] || {}}
						 edit={editContact}
					/>

        		<button className="submit-button">Save</button>
        	</div>
	  )
	}
}

function mapStateToProps (state) {
	return {
		supplier:state.supplier,
		contacts:state.contacts
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loadSupplier,
		editSupplier,
		editAddress,
		loadAddress,
		loadContacts,
		editContact,
	},dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(Supplier)