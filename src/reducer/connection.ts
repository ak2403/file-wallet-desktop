import { Connection } from '../type';

import { ConnectionAction, ConnectionState } from '../types/reducer/connection';

export const initialState: ConnectionState = {
  pendingActions: [],
  activeConnections: [],
};

export function ConnectionReducer(state = initialState, action: ConnectionAction): ConnectionState {
  switch (action.type) {
    case Connection.FETCH_CONNECTION:
      return {
        ...state,
        activeConnections: action.payload || [],
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
