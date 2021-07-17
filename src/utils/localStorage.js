import { handleError } from "./error"

export const setItem = async (key, value) => {
  try {
    console.log('setItem : ', value)
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

export const removeItem = async (key) => {
  try {
    console.log('removeItem : ', key)
    await localStorage.removeItem(key)

    console.log('removeItem get: ', await getItem(key))
    
    return true
  }
  catch(err) {
    handleError(err)
    return false
  }  
}