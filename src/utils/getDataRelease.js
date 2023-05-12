export const getDate = (date) => {
  if (date) {
    return date.slice(0, -6)
  }
  return
}
