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

export const processLogin = data => {
  return async dispatch => {
    try {
      const formatData = data.split('access_token=')
      const isTokenSaved = await setItem('access_token', formatData[1])
  
      if(isTokenSaved) {
        dispatch({
          type: Authentication.LOGGED_IN,
          payload: isTokenSaved
        })
      }
  
      dispatch({
        type: Authentication.LOGGED_IN_ERROR,
      })
    }
    catch(err) {
      dispatch({
        type: Authentication.LOGGED_IN_ERROR,
      })
    }
  }
}

export const registerDevice = data => {
  return async dispatch => {
    data.device_id = await window.electron.getSysInfo();
    data.token = 'default'; //TODO: should use this for the push notification
    const registerDevice = await post(ENDPOINTS.REGISTER_DEVICE, data)

    if (registerDevice.status === 200 && registerDevice?.data?.id) {
      const isDeviceIDSaved = await setItem('device_id', registerDevice?.data?.id)
      
      if (isDeviceIDSaved) {
        dispatch({
          type: Authentication.REGISTER_DEVICE,
          payload: isDeviceIDSaved
        })
      }
    }

    dispatch({
      type: Authentication.REGISTER_DEVICE_ERROR,
    })
  }
}
