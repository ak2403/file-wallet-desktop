const Store = require('electron-store');
const store = new Store();

const setItem = (key, value) => {
  try {
    store.set(key, value)
    return true;
  }
  catch (err) {
    return false;
  }
}

const getItem = (key) => {
  try {
    const getVal = store.get(key)
    return getVal;
  }
  catch (err) {
    return false;
  }
}

const removeItem = (key) => {
  try {
    store.delete(key)
    return true;
  }
  catch (err) {
    return false;
  }
}

module.exports = {
  setItem,
  removeItem,
  getItem,
}