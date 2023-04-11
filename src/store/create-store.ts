import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Reducer } from '../reducer';

const thunkMiddleware = applyMiddleware(thunk);

export const Store = createStore(Reducer, thunkMiddleware);
