import {combineReducers} from 'redux'
import authentication from './authentication'
import connection from './connection'

export default combineReducers({
  authentication,
  connection
})