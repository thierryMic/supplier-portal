import React, { Component } from 'react'
import {placify} from './utils/places'


/**
* @description Represents a bookshelf
* @constructor
*/
class Address extends Component {


	updateQuery = (q) => {
		this.setState(prevState => ({
		    address: {
		        ...prevState.address,
		        street_number:'',
		        route:q.trimLeft()
		    }
		}))

    }

    refreshText = (e) => {
    	let change = {};
    	change[e.target.id] = e.target.value

		this.setState(prevState => ({
		    address: {
		        ...prevState.address,
		        ...change
		    }
		}))
    }


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


			this.setState(prevState => ({
			    address: {
			        ...prevState.address,
			        ...newAddress
			    }
			}))

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

  			this.setState({ac:ac});
  		})

  	}


	render() {
		const {street_number, route, locality, administrative_area_level_1, postal_code, country} = this.state.address;

		return (
			<div className="address-box">

				<div className="input">
					<label className="input-label">Street </label>
					<input id="route" type="text"
						   value={street_number + " " + route}
						   onChange={(event) => this.updateQuery(event.target.value)} />
				</div>

				<div className="input">
					<label className="input-label">City</label>
					<input id="locality" type="text"
						   value={locality}
						   onChange={(e) => this.refreshText(e)} />
				</div>

				<div className="input">
					<label className="input-label">State</label>
					<input id="administrative_area_level_1" type="text"
						   value={administrative_area_level_1}
						   onChange={(e) => this.refreshText(e)} />
				</div>

				<div className="input">
					<label className="input-label">Postcode</label>
					<input id="postal_code" type="text"
						   value={postal_code}
						   onChange={(e) => this.refreshText(e)} />
				</div>

				<div className="input">
					<label className="input-label">Country</label>
					<input id="country" type="text"
					       value={country}
					       onChange={(e) => this.refreshText(e)} />
				</div>
        	</div>
	  )
	}
}

export default Address