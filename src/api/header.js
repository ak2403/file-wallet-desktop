import { getItem } from "../utils/localStorage"

export const getHeaders = async () => {
  try {
    const getToken = await getItem('access_token')
    const getDeviceId = await getItem('device_id')

    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken || ''}`,
        deviceId: getDeviceId || '',
        'X-Forward-Type': 'desktop'
      }
    }
  }
  catch (err) {
    console.log(err)
    return false
  }
}