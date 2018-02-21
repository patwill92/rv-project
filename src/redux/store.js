import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

export const serverStore = () => createStore(reducers, {ui: {nav: false}});

export const clientStore = (initialState) => process.env.NODE_ENV === 'production' ?
    createStore(reducers, initialState) :
    createStore(reducers, initialState, applyMiddleware(logger));
