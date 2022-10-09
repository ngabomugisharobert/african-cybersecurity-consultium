 import {makeActionCreator} from '../utility'

 export const FETCH_COMPANIES = 'FETCH_COMPANIES'
 export const fetchCompanies = makeActionCreator(FETCH_COMPANIES, 'data')


 export const HAS_FETCHED_COMPANIES = 'HAS_FETCHED_COMPANIES'
 export const hasFetchedCompanies = makeActionCreator(HAS_FETCHED_COMPANIES, 'data')



 export const CREATE_COMPANY = 'CREATE_COMPANY'
 export const createCompany = makeActionCreator(CREATE_COMPANY, 'data')


 export const HAS_CREATED_COMPANY = 'HAS_CREATED_COMPANY'
 export const hasCreatedCompany = makeActionCreator(HAS_CREATED_COMPANY, 'data')


 export const DELETE_COMPANY = 'DELETED_COMPANY'
 export const deleteCompany = makeActionCreator(DELETE_COMPANY, 'data')


 export const HAS_DELETED_COMPANY = 'HAS_DELETED_COMPANY'
 export const hasDeletedCompany = makeActionCreator(HAS_DELETED_COMPANY, 'data')