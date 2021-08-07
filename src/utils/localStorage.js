import { handleError } from "./error"
const { get, set, remove } = {
  get: () => {},
  remove: () => {},
  set: () => {},
}

export const setItem = async (key, value) => {
  try {
    console.log('setItem : ', value)
    await set(key, value)
    
    return true
  }
  catch(err) {
    handleError(err)
    return false
  }
}

export const getItem = async (key) => {
  try {
    const getVal = await get(key)
    
    return getVal
  }
  catch(err) {
    handleError(err)
    return false
  }  
}

export const removeItem = async (key) => {
  try {
    const getIfItemPresent = get(key);

    if (!getIfItemPresent) {
      return true
    }
    
    await remove(key)
    
    return true
  }
  catch(err) {
    handleError(err)
    return false
  }  
}