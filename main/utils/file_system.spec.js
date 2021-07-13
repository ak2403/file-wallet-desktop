const {readFolder} = require('./file_system')

describe('readFolder()', () => {
  it('should read the root folder', async () => {
    const rootFolder = await readFolder('Documents/Coding')
  })
})