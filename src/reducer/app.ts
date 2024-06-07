import { AppState } from '../types/reducer/state';
import { AppAction, AppActionType } from '../types/reducer/actions';

const initialState: AppState = {
  isAppLoaded: false,
  isUserLogged: false,
};

export function AppReducer(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    case AppActionType.AppStartup:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: action.payload.userLogged,
      };

    case AppActionType.ConnectionSetup:
      return {
        ...state,
        isUserLogged: true,
      };
    default:
      return state;
  }
}
