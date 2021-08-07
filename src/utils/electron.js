import {handleError} from './error'

export const openURL = async (url) => {
  try {
    await window.shell.openExternal(url)
    
    return true
  }
  catch(err) {
    handleError(err)
  }
}

export const getSystemInfo = async () => {
  try {
    return await window.electron.getSysInfo();
  }
  catch(err) {
    handleError(err)
    return false
  }
}