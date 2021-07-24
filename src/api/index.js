import axios from 'axios';
import {API_URL} from '../config/api'
import {getHeaders} from './header'

export const post = async (endpoint, inputData) => {
  const headerParams = await getHeaders()
  const postEndpoint = `${API_URL}${endpoint}`

  try {
    const {status, data} = await axios.post(
      postEndpoint, 
      inputData, 
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

export const get = async (endpoint) => {
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