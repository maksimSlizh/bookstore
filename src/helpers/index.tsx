export function setDataLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getDataLocalStorage(key: string) {
  const data = JSON.parse(localStorage.getItem(key) as string)
  if (!data) {
    return []
  }
  return data
}
