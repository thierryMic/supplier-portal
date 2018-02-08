import React, { Component } from 'react'
import {placify} from './utils/places'

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
    	streetNumber:'',
    	streetName:'',
    	city:'',
    	state:'',
    	postcode:'',
    	country:'',
  	}

	updateQuery = (q) => {
		const place = this.state.ac.getPlace().address_components;

		const acTemp = new window.google.maps.places.AutocompleteService;
		const temp = acTemp.getPlacePredictions({input:"820 mountain"},function(r){
			console.log(r);
		})

		try {
			place && this.setState({
				streetNumber:place[0].short_name,
				streetName:place[1].short_name,
				city:place[2].short_name,
				state:place[4].short_name,
				postcode:place[6].short_name,
				country:place[5].long_name,
			});
		}

		catch(e) {

		}

    }

  	componentDidMount = () => {

  		placify().then(() => {
  			const ac = new window.google.maps.places.Autocomplete((document.getElementById('street-name')), {types: ['address']});
  			ac.setComponentRestrictions({'country': ['au']});
  			ac.addListener('place_changed', this.updateQuery);

  			this.setState({ac:ac});
  		})

  	}



	render() {
		const {streetNumber, streetName, city, state, postcode, country} = this.state;

		return (
			<div className="address-box">

				<div className="input">
					<label className="input-label">Street </label>
					<input id="street-name" type="text" />
				</div>


				<div className="input">
					<label className="input-label">City</label>
					<input id="city" type="text" value={city}/>
				</div>

				<div className="input">
					<label className="input-label">State</label>
					<input id="state" type="text" value={state}/>
				</div>

				<div className="input">
					<label className="input-label">Postcode</label>
					<input id="postcode" type="text" value={postcode}/>
				</div>

				<div className="input">
					<label className="input-label">Country</label>
					<input id="Country" type="text"value={country}/>
				</div>


        	</div>
	  )
	}
}

export default Address