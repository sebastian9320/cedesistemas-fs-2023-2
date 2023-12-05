const KEY = 'TKN_QHPH';

export const setToken = (token) => {
  localStorage.setItem(KEY, token);
}

export const getToken = () => {
  return localStorage.getItem(KEY);
}

export const removeToken = () => {
  localStorage.removeItem(KEY);
}
