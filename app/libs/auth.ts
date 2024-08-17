export const getToken = (key: string) => {
  return localStorage.getItem(key);
};
