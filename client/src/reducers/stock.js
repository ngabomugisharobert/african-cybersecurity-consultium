import {createReducer} from '../utility'


export const fetchStock = createReducer({},{
    'HAS_FECHED_STOCK'(state,{data}){
        if(data){
            return{
                ...state,
                stock: data
            }
        }else{
            return{
                ...state
            }
        }
    }
})