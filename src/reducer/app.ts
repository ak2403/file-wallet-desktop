import { AppState } from '../types/reducer/state';
import { AppAction } from '../types/reducer/actions';

const initialState: AppState = {
  isAppLoaded: false,
  isUserLogged: false,
};

export function AppReducer(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    default:
      return state;
  }
}
