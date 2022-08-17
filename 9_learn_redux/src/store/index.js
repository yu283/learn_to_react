import { legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
import {reducer} from "./reducer.js";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

// composeEnhancers 函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware({

});

//应用中间件
const storeEnhancer = applyMiddleware(thunk,sagaMiddleware);

const store = createStore(reducer,composeEnhancers(storeEnhancer))

sagaMiddleware.run(saga)

export default store
