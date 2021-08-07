import os from 'os'
import {machineIdSync} from 'node-machine-id';

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

export {
  getSystemInfo
}