import { ConnectionAction, ConnectionState, ConnectionTypes } from '../types/reducer/connection';

export const initialState: ConnectionState = {
  pendingActions: [],
  activeConnections: [],
};

export function ConnectionReducer(state = initialState, action: ConnectionAction): ConnectionState {
  switch (action.type) {
    case ConnectionTypes.FetchConnections:
      return {
        ...state,
        activeConnections: action.payload || [],
      };
    case ConnectionTypes.PendingConnections:
      return {
        ...state,
        pendingActions: action.payload || [],
      };
    default:
      return state;
  }
}
