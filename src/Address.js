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
    	acService:{},
    	geoCoderService:{},
    	suggestions:[],
    	streetNumber:'',
    	streetName:'',
    	city:'',
    	state:'',
    	postcode:'',
    	country:'',
  	}


  	provideSuggestions = (r) => {
		this.setState({suggestions:r});
	}

	fillAddress = (address) => {
		console.log(address);
		const details = address[0].address_components

		this.setState({
			streetNumber:details[0].short_name,
			streetName:details[1].short_name,
			city:details[2].short_name,
			state:details[4].short_name,
			postcode:details[6].short_name,
			country:details[5].long_name,
		});
	}

	updateQuery = (q) => {
		console.log(q);
		this.setState({streetName:q});

		const place = this.state.suggestions.filter((s)=> s.description === q)[0];
		place && this.state.geoCoderService.geocode({placeId:place.place_id}, this.fillAddress);

		this.state.acService.getPlacePredictions({input:q, componentRestrictions:{country:'au'}}, this.provideSuggestions);
    }

  	componentDidMount = () => {

  		placify().then(() => {
  			const ac = new window.google.maps.places.AutocompleteService;
  			const geo = new window.google.maps.Geocoder;
  			this.setState({acService:ac, geoCoderService:geo});
  		})

  	}



	render() {
		const {streetNumber, streetName, city, state, postcode, country} = this.state;

		return (
			<div className="address-box">

				<div className="input">
					<label className="input-label">Street </label>
					<input list="streetSuggestions" onChange={(e) => this.updateQuery(e.target.value)} value={streetName} />
						<datalist id="streetSuggestions">
	               			{this.state.suggestions.map((s) =>
	                    		<option key={s.place_id} id={s.place_id} value={s.description} />
	                		)}
	                	</datalist>
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