import {shell} from 'electron'
import {handleError} from './error'

export const openURL = async (url) => {
  try {
    debugger
    console.log(await window.electron.getSysInfo())
    await shell.openExternal(url)
    
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