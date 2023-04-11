import { combineReducers } from 'redux';
import authentication from './authentication';
import connection from './connection';

export const Reducer = combineReducers({
  authentication,
  connection,
});
