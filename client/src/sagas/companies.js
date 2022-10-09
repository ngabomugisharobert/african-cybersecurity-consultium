import {call, put, takeLatest} from 'redux-saga/effects'
import {DCore} from '../config'


import {
    CREATE_COMPANY,
    hasCreatedCompany,
    FETCH_COMPANIES,
    hasFetchedCompanies,
    DELETE_COMPANY,
    hasDeletedCompany
} from '../actions'


function * createCompany (payload){
    try{
       const response = yield call(DCore.post,'/company', payload.data)
       yield put(hasCreatedCompany(response.data))
    }catch(e){
        yield put(hasCreatedCompany(e.response))
        console.log("some thing went wrong", e)
    }
}

function * fetchCompany (payload){
    try{
      const response =  yield call(DCore.get,'/company') 
       yield put(hasFetchedCompanies(response.data))
    }catch(e){
        console.log("some thing went wrong>>>>>>>>", e)
    }
}

function * deleteCompany (payload){
    try{
      const response =  yield call(DCore.destroy,`/company/${payload.data}`) 
       yield put(hasDeletedCompany(response.data))
    }catch(e){
        console.log("some thing went wrong>>>>>>>>", e)
    }
}



export function * CompanySaga(){
    yield takeLatest(CREATE_COMPANY,createCompany)
    yield takeLatest(FETCH_COMPANIES,fetchCompany)
    yield takeLatest(DELETE_COMPANY,deleteCompany)
}