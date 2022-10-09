import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers';
import * as sagas from '../sagas';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(rootSaga);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}