import {makeActionCreator} from '../utility'

export const FETCH_STOCK = 'FETCH_STOCK'
export const fetchStock = makeActionCreator(FETCH_STOCK, 'data')


export const HAS_FECHED_STOCK = 'HAS_FECHED_STOCK'
export const hasFetchedStock = makeActionCreator(HAS_FECHED_STOCK, 'data')
