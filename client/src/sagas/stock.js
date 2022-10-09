import {call, put, takeLatest} from 'redux-saga/effects'
import {DCore} from '../config'




import {
    FETCH_STOCK,
    hasFetchedStock
} from '../actions'


function * fetchStock (){

    try{
        const response = yield call (DCore.get, '/stock')
        yield put(hasFetchedStock(response.data))
    }
    catch(err){
        console.log("the error we get", err.response)
    }
}


export function * stockSaga(){
    yield takeLatest(FETCH_STOCK, fetchStock)
}