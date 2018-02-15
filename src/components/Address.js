import React, { Component } from 'react'
import {placify} from '../utils/places'
import Input from './Input'
/**
* @description Represents a bookshelf
* @constructor
*/
class Address extends Component {

 	state = {
    /**
    * @description books - the list of all books in the user's library
    */
    	ac:{},
    	// address:{
    	// 	street_number:'',
    	// 	route:'',
    	// 	locality:'',
    	// 	administrative_area_level_1:'',
    	// 	postal_code:'',
    	// 	country:''
    	// }
  	}

	updateQuery = (q) => {
		this.setState(prevState => ({
		    address: {
		        ...prevState.address,
		        street_number:'',
		        route:q.trimLeft()
		    }
		}))

    }

  //   refreshText = (e) => {
  //   	let change = {};
  //   	change[e.target.id] = e.target.value

		// this.setState(prevState => ({
		//     address: {
		//         ...prevState.address,
		//         ...change
		//     }
		// }))
  //   }


	fillAddress = () => {
		try {
			const place = this.state.ac.getPlace().address_components;
			let newAddress = {};

			place.forEach((addressComponent) => {
				addressComponent.types.forEach((componentType) => {
					if (componentType in this.state.address) {
						if (componentType === "administrative_area_level_1")
						{
							newAddress[componentType]=addressComponent.short_name;
						} else {
							newAddress[componentType]=addressComponent.long_name;
						}

					}
				})
			})

			this.props.loadGoogleAddress(newAddress);

		}
		catch(e) {
			console.log(e);
		}
	}


  	componentDidMount = () => {

  		placify().then(() => {
  			const ac = new window.google.maps.places.Autocomplete((document.getElementById('route')), {types: ['address']});
  			ac.setComponentRestrictions({'country': ['au']});
  			ac.addListener('place_changed', this.fillAddress);

  			this.setState({ac:ac, address:this.props.initial});
  		})

  	}


	render() {
		const {street_number, route, locality, administrative_area_level_1, postal_code, country} = this.props.supplier.address;


		return (
			<div className="address-box">

				<h4>Address</h4>

				<div className="input">
					<label className="input-label">Street </label>
					<input id="route" type="text"
						   value={street_number + " " + route}
						   onChange={(event) => this.updateQuery(event.target.value)} />
				</div>

				<Input id="locality" label="City"
					   value={locality}
					   refreshText={this.props.refreshText} />



				<Input id="administrative_area_level_1" label="State"
					   value={administrative_area_level_1}
					   refreshText={this.props.refreshText} />


				<Input id="postal_code" label="Postcode"
					   value={postal_code}
					   refreshText={this.props.refreshText} />

				<Input id="country" label="Country"
				       value={country}
				       refreshText={this.props.refreshText} />

        	</div>
	  )
	}
}

export default Address