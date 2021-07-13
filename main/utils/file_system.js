const fs = require('fs');
const Config =  require('../config');

const readFolder = async (path = '') => {
  try {
    const getRootFolder = await fs.readdirSync(`/Users/${Config.ROOT_USER}/${path}`)

    return getRootFolder
  }
  catch(err) {
    console.log(err)
    return []
  }
}

module.exports = {
  readFolder
}