import {Authentication} from '../type'
import AuthenticationReducer from "./authentication";

describe('Logged App in AuthenticationReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isAppLoaded: false,
      isUserLogged: false,
    }
  })
  
  it('should return no logged user state.', () => {
    const action = {
      type: Authentication.LOADED_APP
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: false
    }))
  })

  it('should return logged user state.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      payload: true
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: true
    }))
  })

  it('should handle string input.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      payload: "true"
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: true
    }))
  })

  it('should handle unexpected input.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      payload: "true1"
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: false
    }))
  })
})