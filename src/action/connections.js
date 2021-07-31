import {get} from '../api'
import {ENDPOINTS} from '../config/api'

export const getConnections = async () => {
  const getAllConnections = await get(ENDPOINTS.GET_CONNECTIONS)
}