import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import userReducer from './user/user.reducer'
import imageReducer from './image/image.reducer'

import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

process.env.NODE_ENV === 'development' && 
middlewares.push(logger)

const rootReducer = combineReducers({ userReducer, imageReducer }) 
const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
