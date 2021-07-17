export const ToBool = (param) => {
  const strParams = String(param)
  if (strParams === 'true') {
    return true
  }
  return false
}