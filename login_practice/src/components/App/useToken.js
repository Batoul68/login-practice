import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) {
      return null;
    }
    const userToken = JSON.parse(tokenString);
    const token = userToken?.token;

    if(!token) {
      return null;
    }

    // Decode token to check expiration
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // convert to seconds

      // If token is expired, remove it and return null
      if (decoded.exp < currentTime) {
        sessionStorage.removeItem('token');
        return null;
      }
      // Return token if not expired
      return token;
    }
    catch (error) {
      // If decoding fails, then the token is invalid so remove it
      sessionStorage.removeItem('token');
      return null;
    }
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  }

  const removeToken = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  }

  return {
    setToken: saveToken,
    token,
    removeToken
  }
}