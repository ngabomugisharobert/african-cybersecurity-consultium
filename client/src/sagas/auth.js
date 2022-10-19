import { call, put, takeLatest } from 'redux-saga/effects'
import { DCore } from '../config'
import { loginUser } from '../services/api'


import {
    SIGNIN,
    hasSignedIn,
    failedToSignIn,
} from '../actions'


function* signinSaga(payload) {
    console.log('payload', payload)
    try {
        const response = yield call(loginUser, payload.data)
        if (response.status === 200) {
            yield put(hasSignedIn({ username: payload.data.username, password: payload.data.password }))
        } else {
            console.log('**error**')
        } 
    } catch (e) {
        yield put(failedToSignIn({ username: payload.data.username, password: payload.data.password }))
        console.log('error========', e)
    }

}


export function* authSaga() {
    yield takeLatest(SIGNIN, signinSaga)
}