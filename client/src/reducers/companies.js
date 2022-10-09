import {createReducer} from '../utility'


export const fetchCompanies = createReducer({},{
    'HAS_FETCHED_COMPANIES'(state,{data}){
        if(data){
            return{
                ...state,
                companies: data
            }
        }else{
            return{
                ...state
            }
        }
    }
})


export const hasCreatedCompany = createReducer({},{
    'HAS_CREATED_COMPANY'(state,{data}){
        if(data){
            return{
                ...state,
                status:data
            }
        }
        else{
            return{
                ...state
            }
        }
    }
})


export const hasDeletedCompany = createReducer({},{
    'HAS_DELETED_COMPANY'(state,{data}){
        if(data){
            return{
                ...state,
                status:data
            }
        }
        else{
            return{
                ...state
            }
        }
    }
})