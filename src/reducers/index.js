import { combineReducers } from 'redux'
import supplierReducer from './supplierReducer'

const allReducers = combineReducers (
  {
    supplier:supplierReducer
  }
)
export default allReducers