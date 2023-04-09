import { Connection } from '../type';

export const initialState = {
  pendingActions: [],
  connections: [],
};

function ConnectionReducer(state = initialState, action) {
  switch (action.type) {
    case Connection.FETCH_CONNECTION:
      return {
        ...state,
        connections: action.payload || [],
      };
    case Connection.PENDING_CONNECTION:
      return {
        ...state,
        pendingActions: action.payload || [],
      };
    default:
      return state;
  }
}

export default ConnectionReducer;
