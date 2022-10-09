import { combineReducers } from 'redux';
import { loader } from './loader'


import {
    fetchCompanies,
    hasCreatedCompany,
    hasDeletedCompany
} from './companies'

import {
    loggedIn,

} from './auth'

import { fetchStock } from './stock'


const rootReducer = combineReducers({
    loader,
    fetchCompanies,
    hasCreatedCompany,
    hasDeletedCompany,
    loggedIn,
    fetchStock
})


export default rootReducer