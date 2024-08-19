export const getLocalStorageToken = (key: string) => {
  return localStorage.getItem(key);
};

export const getSectionStorageToken = (key: string) => {
  return sessionStorage.getItem(key);
};

export const setLocalStorageToken = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const setSectionStorageToken = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};
