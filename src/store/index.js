import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../reducer'

const thunkMiddleware = applyMiddleware(thunk);

const Store = createStore(Reducers, thunkMiddleware)

export default Store;

