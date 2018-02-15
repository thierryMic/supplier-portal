const LOAD_SUPPLIER = 'LOAD_SUPPLIER';


export function loadSupplier (supplier) {
	return {
		type: LOAD_SUPPLIER,
		payload: supplier
	}
}

