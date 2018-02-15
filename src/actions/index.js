export const LOAD_ADDRESS = 'LOAD_ADDRESS'


export function loadAddress ({ street_number, route, locality }) {
  return {
    type: LOAD_ADDRESS,
    street_number,
    route,
    locality,
  }
}

