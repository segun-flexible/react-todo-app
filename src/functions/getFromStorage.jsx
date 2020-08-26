export function getFromStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}
