import React, { Component } from 'react'
import Input from './components/Input'
import Address from './components/Address'
import {BankDetails} from './components/BankDetails'
import {Contact} from './components/Contact'
/**
* @description Represents a bookshelf
* @constructor
*/
class Supplier extends Component {



  state = {
    /**
    * @description books - the list of all books in the user's library
    */
    	supplier: {name:"testSupplier",
    			   abn:"",
    			   acn:"",
    			   phone:"",
    			   acName:"",
    			   bsb:"",
    			   ac:"",
    			   address:{}
    			},
  	}



  	componentDidMount = (
  		fetch(`http://localhost:8000/supplier/JSON/1`)
  			.then((result) => result.json())
  			.then((supp) => this.setState({supplier:supp}))
	)

  	refreshText = (e) => {
    	let change = {};
    	change[e.target.id] = e.target.value

		this.setState(prevState => ({
		    supplier: {
		        ...prevState.supplier,
		        ...change
		    }
		}))
  	}

	/**
	* @description iterates through the books array of the shelf prop and renders a book component
	* for each item
	*/
	render() {

		return (
			<div className="container">
				<div>
					<h4>General</h4>
	        		<Input id = "name" label = "Company name" value={this.state.supplier.name} refreshText={this.refreshText} />
					<Input id = "acn" label = "ACN" value={this.state.supplier.acn} refreshText={this.refreshText} />
					<Input id = "abn" label = "ABN" value={this.state.supplier.abn} refreshText={this.refreshText} />
					<Input id = "phone" label = "Main phone" type="tel" value={this.state.supplier.phone} refreshText={this.refreshText} />
				</div>


				<BankDetails supplier={this.state.supplier} refreshText={this.refreshText} />
				{console.log(this.state.supplier.address)}
				<Address initial = {this.state.supplier.address} />

				<Contact header = "Primary contact" />
				<Contact header = "Accounts receivable" />
        		<button className="submit-button">Save</button>
        	</div>
	  )
	}
}


export default Supplier