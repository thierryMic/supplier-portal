/**
* @description books - the list of all books in the user's library
*/

const supplier = {name:"",
			      abn:"",
			      acn:"",
			      phone:"",
			      acName:"",
			      bsb:"",
			      ac:"",
			      address:{route:""},
			      contacts:{}
			 }


export default function reducer(state=supplier, action) {

	switch (action.type) {

		case "EDIT_SUPPLIER": {
			return {...state,
					...action.payload
			};
		}

		case "EDIT_ADDRESS": {
			return {...state,
					address: {
						...state.address,
						...action.payload
					},
			};
		}

		case "EDIT_CONTACT": {
			return {...state,
					contacts:{
						...state.contacts,
						[action.id]:{
							...state.contacts[action.id],
							...action.payload
						}
					}
					}
			};


		default: {
			return state;
		}
	}
}