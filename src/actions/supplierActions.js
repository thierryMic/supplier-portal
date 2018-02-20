const EDIT_SUPPLIER = 'EDIT_SUPPLIER';
const EDIT_ADDRESS = 'EDIT_ADDRESS';
const EDIT_CONTACT = 'EDIT_CONTACT';


export function loadSupplier (supplier) {
	return {
		type: EDIT_SUPPLIER,
		payload: supplier
	}
}


export function editSupplier (e) {
	let change = {};
	change[e.target.id] = e.target.value;

	return {
		type: EDIT_SUPPLIER,
		payload: change
	}
}


export function loadAddress (address) {
	console.log("Action", address);
	return {
		type: EDIT_ADDRESS,
		payload: address
	}
}


export function editAddress (e) {
	let change = {};
	change[e.target.id] = e.target.value;

	return {
		type: EDIT_ADDRESS,
		payload: change
	}
}


export function editContact (e, uid) {
	let change = {};
	change[e.target.id] = e.target.value;

	return {
		type: EDIT_CONTACT,
		payload: change,
		id: uid
	}
}