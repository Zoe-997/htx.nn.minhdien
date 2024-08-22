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

export const getChangedFields = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
) => {
  const changes: Record<string, any> = {};

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        changes[key] = obj2[key];
      }
    }
  }

  return Object.keys(changes).length > 0 ? changes : null;
};
