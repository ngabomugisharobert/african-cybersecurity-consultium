import {makeActionCreator} from '../utility'

export const SIGNIN = 'SIGNIN'
export const signin = makeActionCreator(SIGNIN, 'data')

export const HAS_SIGNED_IN = 'HAS_SIGNED_IN'
export const hasSignedIn = makeActionCreator(HAS_SIGNED_IN, 'data')