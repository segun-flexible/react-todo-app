export function saveToStorage(type, data) {
  localStorage.setItem(type, JSON.stringify(data));
}
