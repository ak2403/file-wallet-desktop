const {readFolder, readFile} = require('./file_system')

describe('readFolder()', () => {
  it('should read the root folder', async () => {
    const rootFolder = await readFolder('Documents/Coding')
    // await readFile('Documents/Untitled.pdf')
  })
})