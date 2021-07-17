import { handleError } from "./error"

export const saveItem = async (key, value) => {
  try {
    await localStorage.setItem(key, value)
    
    return true
  }
  catch(err) {
    handleError(err)
    return false
  }
}

export const getItem = async (key) => {
  try {
    const getVal = await localStorage.getItem(key)
    
    return getVal
  }
  catch(err) {
    handleError(err)
    return false
  }  
}