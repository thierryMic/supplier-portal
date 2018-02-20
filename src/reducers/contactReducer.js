export default function contactReducer(state={}, action) {
	switch (action.type) {

		case "LOAD_CONTACTS": {
			return {...state,
					...action.payload
				}
			}

		case "EDIT_CONTACT": {
			console.log("STATE", state);
			return {...state,
					[action.id]:{
						...state[action.id],
						...action.payload
					}
				}
			}

		default: {
			return state;
		}
	}
}