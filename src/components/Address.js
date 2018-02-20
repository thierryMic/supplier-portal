import React, { Component } from 'react'
import {placify} from '../utils/places'
import Input from './Input'



/**
* @description Represents a bookshelf
* @constructor
*/
class Address extends Component {

	ac = null;

	fillAddress = () => {
		try {
			const place = this.ac.getPlace().address_components;
			let add = {};

			place.forEach((component) => {
				component.types.forEach((type) => {
					add[type] = type === "administrative_area_level_1" ? component.short_name : component.long_name
				})
			})
			this.props.load(add);
		}
		catch(e) {
			console.log(e);
		}
	}



  	componentDidMount = () => {
  		placify().then(() => {
  			this.ac = new window.google.maps.places.Autocomplete((document.getElementById('street_number')), {types: ['address']});
  			this.ac.setComponentRestrictions({'country': ['au']});
  			this.ac.addListener('place_changed', this.fillAddress);
  		})
  	}


	render() {

		const { edit } = this.props
		const {street_number, route, locality, administrative_area_level_1, postal_code, country} = this.props.supplier.address;


		return (
			<div className="address-box">

				<h4>Address</h4>
				<Input id="street_number" label="Street number" value={street_number} edit={edit} />
				<Input id="route" label="Street name" value={route} edit={edit} />
				<Input id="locality" label="City" value={locality} edit={edit} />
				<Input id="administrative_area_level_1" label="State" value={administrative_area_level_1} edit={edit} />
				<Input id="postal_code" label="Postcode" value={postal_code} edit={edit} />
				<Input id="country" label="Country" value={country} edit={edit} />
        	</div>
	  )
	}
}

export default Address