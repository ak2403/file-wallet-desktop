const os = require('os')
const {machineIdSync} = require('node-machine-id');

const getSystemInfo = async () => {
  try {
    const getInfo = await machineIdSync(true);
    const getUser = os.userInfo();
    
    return {
      machineId: getInfo,
      systemName: getUser?.username || '',
    }
  }
  catch(err) {
    return false
  }
}

module.exports = {
  getSystemInfo
}