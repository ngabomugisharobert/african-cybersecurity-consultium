import { createReducer } from '../utility'


export const loggedIn = createReducer({}, {
    'HAS_SIGNED_IN'(state, { data }) {
        if (data) {
            return {
                ...state,
                data,
                status: 200,
                message: "Login successful"
            }
        }
        else {
            return {
                ...state
            }
        }
    }
},
    {
        'FAILED_TO_SIGN_IN'(state, { data }) {
            if (data) {
                return {
                    ...state,
                    data,
                    status: 400,
                    message: "Login failed"
                }
            }
            else {
                return {
                    ...state,
                    status: 400,
                    message: "Login failed"
                }
            }
        }
    }
    ,
    {
    'HAS_SIGNED_OUT'(state, { data }) {
        if (data) {
            return {
                ...state,
                data,
                status: 200,
                message: "Logout successful"
            }
        }
        else {
            return {
                ...state
            }
        }
    }
})