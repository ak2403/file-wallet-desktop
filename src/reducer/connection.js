import {Connection} from '../type'

export const initialState = {
  connections: []
}

function ConnectionReducer(state = initialState, action) {
  switch (action.type) {
    case Connection.FETCH_CONNECTION:
      return {
        ...state,
        connections: action.payload || []
      }
    default:
      return state;
  }
}

export default ConnectionReducer
