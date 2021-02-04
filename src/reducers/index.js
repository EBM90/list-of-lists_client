import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import listReducer from './listReducer'
import productReducer from './productReducer'

export default combineReducers({
    products: productReducer,
    form: formReducer,
    lists: listReducer,
})