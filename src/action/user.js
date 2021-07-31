import {post} from '../api'
import {Authentication} from '../type'
import {ENDPOINTS} from '../config/api'
import {get} from '../api'
import {getItem, setItem, removeItem} from '../utils/localStorage'

export const loadApp = () => {
  return async dispatch => {
    const getTokenIfPresent = await getItem('access_token')
    const getDeviceIdIfPresent = await getItem('device_id')

    const checkUserStatus = getTokenIfPresent && await get(ENDPOINTS.USER_CHECK)
    
    if (!getTokenIfPresent || checkUserStatus?.status === 500) {
      await removeItem('access_token')
      await removeItem('device_id')
      
      dispatch({
        type: Authentication.LOADED_APP,
        userLogged: false,
        deviceLogged: false,
      })  
    }

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

export const registerDevice = (data, isDeviceRegistered) => {
  return async dispatch => {
    const registerDevice = await post(isDeviceRegistered ? ENDPOINTS.LOGIN_DEVICE : ENDPOINTS.REGISTER_DEVICE, data)

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
      payload: registerDevice.message
    })
  }
}

export const getDeviceInfo = () => {
  return async dispatch => {
    const getInfoFromNode = await window.electron.getSysInfo()

    if (getInfoFromNode) {
      const checkIfDeviceRegistered = await post(ENDPOINTS.CHECK_DEVICE, {
        deviceId: getInfoFromNode.machineId
      })

      if (checkIfDeviceRegistered.status === 200) {
        dispatch({
          type: Authentication.FETCH_DEVICE_INFO,
          device: getInfoFromNode,
          payload: checkIfDeviceRegistered.data
        })
      }
    }
    //TODO: need to handle the error side
  }
}

export const userLogout = () => {
  return async dispatch => {
    const removeToken = await removeItem('access_token')
    const removeDevice = await removeItem('device_id')

    if(removeToken && removeDevice) {
      dispatch({
        type: Authentication.LOGGED_OUT
      })
    }

    dispatch({
      type: Authentication.LOGGED_OUT_ERROR
    })
  }
}