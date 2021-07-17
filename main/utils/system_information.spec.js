const {getSystemInfo} = require('./system_information')

describe('getSystemInfo()', () => {
  it('should return the system info.', async () => {
    const getInfo = await getSystemInfo()

    expect(getInfo).toBeTruthy()
  })
})