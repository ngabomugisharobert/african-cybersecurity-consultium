import {makeActionCreator} from '../utility'

export const SIGNIN = 'SIGNIN'
export const signin = makeActionCreator(SIGNIN, 'data')

export const HAS_SIGNED_IN = 'HAS_SIGNED_IN'
export const hasSignedIn = makeActionCreator(HAS_SIGNED_IN, 'data')

export const FAILED_TO_SIGN_IN = 'FAILED_TO_SIGN_IN'
export const failedToSignIn = makeActionCreator(FAILED_TO_SIGN_IN, 'data')