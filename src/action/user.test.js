import {Authentication} from '../type'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {getItem, removeItem, setItem} from '../utils/localStorage'
import {post, get} from '../api'
import {loadApp, registerDevice, processLogin, userLogout} from './user'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../utils/localStorage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}))

jest.mock('../api', () => ({
  post: jest.fn(),
  get: jest.fn(),
}))

describe('loadApp()', () => {
  let store;

  beforeEach(() => {
    store = mockStore()
  })

  it("should return default result.", async () => {
    getItem.mockImplementation(() => false)

    await store.dispatch(loadApp())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOADED_APP,
      userLogged: false,
      deviceLogged: false,
    })
  })

  it("should return result for existing token.", async () => {
    getItem.mockImplementation(() => true)

    await store.dispatch(loadApp())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOADED_APP,
      userLogged: true,
      deviceLogged: true,
    })
  })

  it("should handle 500 when get errors.", async () => {
    getItem.mockImplementation(() => true)
    get.mockImplementation(() => ({
      status: 500,
    }))
    await store.dispatch(loadApp())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOADED_APP,
      userLogged: false,
      deviceLogged: true,
    })
  })
})

describe('registerDevice()', () => {
  let store;

  beforeEach(() => {
    store = mockStore()
    window.electron = {
      getSysInfo: jest.fn().mockImplementation(() => 1223)
    }
  })

  it("should return expected success result.", async () => {
    post.mockImplementation(() => ({
      status: 200,
      data: {
        id: '123'
      }
    }))
    get.mockImplementation(() => ({
      status: 200,
    }))
    setItem.mockImplementation(() => true)

    await store.dispatch(registerDevice({}))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.REGISTER_DEVICE,
      payload: true
    })
  })

  it("should return expected error result when storage errored.", async () => {
    post.mockImplementation(() => ({
      status: 200,
      data: {
        id: '123'
      }
    }))
    get.mockImplementation(() => ({
      status: 200,
    }))
    setItem.mockImplementation(() => false)

    await store.dispatch(registerDevice({}))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.REGISTER_DEVICE_ERROR,
    })
  })

  it("should return expected error result when post call error.", async () => {
    post.mockImplementation(() => ({
      status: 500,
    }))
    setItem.mockImplementation(() => true)

    await store.dispatch(registerDevice({}))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.REGISTER_DEVICE_ERROR,
    })
  })
})

describe('processLogin()', () => {
  let store;

  beforeEach(() => {
    store = mockStore()
  })

  it('should return success result.', async () => {
    setItem.mockImplementation(() => true)

    await store.dispatch(processLogin('saccess_token=122'))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOGGED_IN,
      payload: true
    })
  })

  it('should return failure result.', async () => {
    setItem.mockImplementation(() => false)

    await store.dispatch(processLogin('saccess_token=122'))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOGGED_IN_ERROR,
    })
  })

  it('should return unexpected result.', async () => {
    setItem.mockImplementation(() => true)

    await store.dispatch(processLogin('access_token=122'))
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOGGED_IN_ERROR,
    })
  })
})

describe('userLogout()', () => {
  let store;

  beforeEach(() => {
    store = mockStore()
  })

  it('should return success result.', async () => {
    removeItem.mockImplementation(() => true)

    await store.dispatch(userLogout())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOGGED_OUT,
    })
  })

  it('should return failure result.', async () => {
    removeItem.mockImplementation(() => false)

    await store.dispatch(userLogout())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOGGED_OUT_ERROR,
    })
  })
})