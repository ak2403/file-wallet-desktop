import {get} from '../api'
import {ENDPOINTS} from '../config/api'
import {Connection} from '../type'
import {getItem, setItem, removeItem} from '../utils/localStorage'

export const getConnections = () => {
  return async dispatch => {
    const {status, data} = await get(ENDPOINTS.GET_CONNECTIONS)

    if (status === 200) {
      const getSavedConnections = await getItem('existingConnections')
      const parseSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : []
      
      const getNewConnections = data.connections.filter(item => !parseSavedConnections.includes(item._id))
      
      window.electron.send('establish-connection', parseSavedConnections)
      if (getNewConnections.length) {
        const getOnlyID = getNewConnections.map(item => item._id)
        const mergeConnections = parseSavedConnections.concat(getOnlyID)
        await setItem('existingConnections', JSON.stringify(mergeConnections))
        window.electron.send('establish-connection', mergeConnections)
      }
      
      dispatch({
        type: Connection.FETCH_CONNECTION,
        payload: data.connections || []
      })
    }
  }
}