import axios from 'axios'
import { getItem } from "./store";

const API_URL = 'http://10.0.0.18:5000'

const getHeaders = async () => {
  try {
    
    const getToken = await getItem('access_token')
    const getDeviceId = await getItem('device_id')

    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken || ''}`,
        deviceId: getDeviceId,
        'X-Forward-Type': 'desktop'
      }
    }
  }
  catch (err) {
    console.log(err)
    return false
  }
}

const get = async (endpoint) => {
  const headerParams = await getHeaders()
  const getEndpoint = `${API_URL}${endpoint}`

  try {
    const {status, data} = await axios.get(
      getEndpoint, 
      headerParams)
    
    return {
      status,
      data,
    }
  }
  catch (err) {
    return {
      status: err.status || 500,
      data: err.data || ''
    }
  }
}

export {
  get,
}