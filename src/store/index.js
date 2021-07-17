import {createStore, applyMiddleware} from 'react-redux'
import thunk from 'react-thunk'
import Reducers from '../reducer'

const thunkMiddleware = applyMiddleware(thunk);

const Store = createStore(Reducers, thunkMiddleware)

export default Store;

