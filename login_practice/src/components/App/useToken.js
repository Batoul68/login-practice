import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) {
      return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    console.log(`userToken after being set to session storage: ${sessionStorage.getItem('token')}`);
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}