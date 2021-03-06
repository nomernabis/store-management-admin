import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"

import { auth, categories, modal, products, attributes, loader, users } from "./reducers"

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState){
    return createStore(combineReducers({ auth, categories, modal, products, attributes, loader, users}), 
                        preloadedState,
                        applyMiddleware(thunkMiddleware, loggerMiddleware))
}