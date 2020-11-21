import * as React from 'react';

const localStorageKey = '__auth_provider_token__';
const userContext = React.createContext(null);

export async function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export async function login(authResponse) {
  window.localStorage.setItem(localStorageKey, authResponse.jwt);
  return authResponse.user;
}

export async function logout() {
  window.localStorage.removeItem(localStorageKey);
  window.location.assign('/');
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useAuth() {
  const { user, setUser } = React.useContext(userContext);

  return { user, setUser, login, logout, getToken };
}
