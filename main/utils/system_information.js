const {machineIdSync} = require('node-machine-id');

const getSystemInfo = async () => {
  try {
    const getInfo = await machineIdSync(true);
    console.log(getInfo)
    return getInfo
  }
  catch(err) {
    return false
  }
}

module.exports = {
  getSystemInfo
}