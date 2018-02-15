/**
* @description books - the list of all books in the user's library
*/
const supplier = {name:"testSupplier",
			      abn:"",
			      acn:"",
			      phone:"",
			      acName:"",
			      bsb:"",
			      ac:"",
			      address:{}
			 }


export default function reducer(state=supplier, action) {
	switch (action.type) {
		case "LOAD_SUPPLIER": {
			return {...state,
					...action.payload.supplier
			};
		}

		default: {
			return state;
		}
	}
}