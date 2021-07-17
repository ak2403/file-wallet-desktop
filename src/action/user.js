import {post} from '../api'
import {Authentication} from '../type'
import {ENDPOINTS} from '../config/api'
import {getItem, setItem} from '../utils/localStorage'

export const loadApp = () => {
  return async dispatch => {
    const getTokenIfPresent = await getItem('access_token')
    const getDeviceIdIfPresent = await getItem('device_id')

    dispatch({
      type: Authentication.LOADED_APP,
      userLogged: getTokenIfPresent ? true : false,
      deviceLogged: getDeviceIdIfPresent ? true : false,
    })
  }
}

export const registerDevice = data => {
  return async dispatch => {
    const registerDevice = await post(ENDPOINTS.REGISTER_DEVICE, data)

    if (registerDevice.status === 200 && registerDevice?.data?.id) {
      const isDeviceIDSaved = await setItem('device_id', registerDevice?.data?.id)
      
      if (isDeviceIDSaved) {
        dispatch({
          type: Authentication.REGISTER_DEVICE,
          payload: registerDevice.data.id
        })
      }
    }

    dispatch({
      type: Authentication.REGISTER_DEVICE_ERROR,
    })
  }
}