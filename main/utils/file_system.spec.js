const {readFolder, readFile} = require('./file_system')

describe('readFolder()', () => {
  it('should read the root folder', async () => {
    const rootFolder = await readFile('Downloads/[FreeCourseSite.com] Udemy - React Native - The Practical Guide [2021 Edition]/1. Getting Started/1. Welcome!.mp4')
    // await readFile('Documents/Untitled.pdf')

    console.log("hi")
  })
})