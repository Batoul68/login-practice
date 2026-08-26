import styles from './LoginPage.module.css'
import React, { useState } from 'react';
import { loginUser } from '../../services/login.js';

export default function LoginPage({setToken}) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /* issue: since adding try-catch, the token isn't saving outside of the try block,
    returns undefined if I try to print it
  */
  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const sum = 0;

    try {
      const token = await  loginUser({
        username,
        password
      });
      setToken(token);
    }
    catch (err) {
      setError(err.message || 'An error occurred during login');
    }
    finally {
      setLoading(false);
    }
  }

  // issue: won't redirect from login page to initial page I tried to open ie. dashboard or preferences
  // after token is stored you have to go into those pages or it's stuck on the login screen
  return(
    <div className={styles.loginContainer}>
      <h2>Please Log In</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input 
            id={styles['usernameInput']}
            type="text" 
            onChange={e => setUsername(e.target.value)}
            disabled={loading}
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            id={styles['passwordInput']}
            type="password" 
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
        </label>
        <div className={styles.buttonContainer}>
          <button 
            id={styles['loginButton']} 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}