import { ConnectionAction, ConnectionState, ConnectionTypes } from '../types/reducer/connection';

export const initialState: ConnectionState = {
  pendingConnections: [],
  activeConnections: [],
  existingConnections: [],
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
        pendingConnections: action.payload || [],
      };
    case ConnectionTypes.ExistingConnections:
      return {
        ...state,
        existingConnections: action.payload || [],
      };
    default:
      return state;
  }
}
