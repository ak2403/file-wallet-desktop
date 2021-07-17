import axios from 'axios';
import {post} from '.'

jest.mock('axios')

describe('post()', () => {
  it('should return 200 status data.', async () => {
    const outputResult = {
      status: 200,
      data: {
        id: '123'
      }
    }
    axios.post.mockImplementation(() => Promise.resolve(outputResult))

    const doPostCall = await post('endpoint', {})

    expect(doPostCall).toMatchObject(outputResult)
  })

  it('should return 500 status with error.', async () => {
    const outputResult = {
      status: 500,
      data: {
        error: 'Error Happened'
      }
    }
    axios.post.mockImplementation(() => Promise.reject(outputResult))

    const doPostCall = await post('endpoint', {})

    expect(doPostCall).toMatchObject(outputResult)
  })
})

