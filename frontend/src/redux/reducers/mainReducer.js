import { combineReducers } from 'redux'

import productosReducer from './productosReducer'
import authReducer from './authReducer'

const mainReducer = combineReducers({

    pepito:productosReducer,
    authReducer

})

export default mainReducer
