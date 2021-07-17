import {Authentication} from '../type'
import AuthenticationReducer from "./authentication";

describe('Logged App in AuthenticationReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isAppLoaded: false,
      isUserLogged: false,
      isDeviceRegistered: false,
    }
  })
  
  it('should return no logged user state.', () => {
    const action = {
      type: Authentication.LOADED_APP
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: false,
      isDeviceRegistered: false,
    }))
  })

  it('should return logged user state.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      userLogged: true
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: true,
      isDeviceRegistered: false,
    }))
  })

  it('should return logged user/device state.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      userLogged: true,
      deviceLogged: true,
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: true,
      isDeviceRegistered: true,
    }))
  })

  it('should handle string input.', () => {
    const action = {
      type: Authentication.LOADED_APP,
      userLogged: "true"
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
      userLogged: "true1"
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isAppLoaded: true,
      isUserLogged: false
    }))
  })

  it("should handle success for Logged In", () => {
    const action = {
      type: Authentication.LOGGED_IN,
      payload: "true"
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isUserLoggedError: false,
      isUserLogged: true
    }))
  })

  it("should handle unexpected for Logged In", () => {
    const action = {
      type: Authentication.LOGGED_IN,
      payload: "true12"
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isUserLoggedError: false,
      isUserLogged: false
    }))
  })

  it("should handle expected for Logged In Error", () => {
    const action = {
      type: Authentication.LOGGED_IN_ERROR,
    }
    const callAuthentication = AuthenticationReducer(state, action)

    expect(callAuthentication).toEqual(expect.objectContaining({
      isUserLoggedError: true,
      isUserLogged: false
    }))
  })
})