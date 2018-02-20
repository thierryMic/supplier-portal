import { combineReducers } from 'redux'
import supplierReducer from './supplierReducer'
import contactReducer from './contactReducer'

const allReducers = combineReducers (
  {
    supplier:supplierReducer,
    contacts:contactReducer,
  }
)
export default allReducers