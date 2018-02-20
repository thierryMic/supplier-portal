const supplier = {name:"",
			      abn:"",
			      acn:"",
			      phone:"",
			      acName:"",
			      bsb:"",
			      ac:"",
			      address:{route:""},
			 }


export default function supplierReducer(state=supplier, action) {
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

		default: {
			return state;
		}
	}
}