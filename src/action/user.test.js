import {Authentication} from '../type'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {getItem} from '../utils/localStorage'
import {loadApp} from './user'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../utils/localStorage', () => ({
  getItem: jest.fn()
}))

describe('loadApp', () => {
  let store;

  beforeEach(() => {
    store = mockStore()
  })

  it("should return default result.", async () => {
    getItem.mockImplementation(() => false)

    await store.dispatch(loadApp())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOADED_APP,
      payload: false
    })
  })

  it("should return result for existing token.", async () => {
    getItem.mockImplementation(() => true)

    await store.dispatch(loadApp())
    
    expect(store.getActions()).toContainEqual({
      type: Authentication.LOADED_APP,
      payload: true
    })
  })
})