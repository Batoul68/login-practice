import styles from './LoginPage.module.css'
import React, { useState } from 'react';
import { loginUser } from '../../services/login.js';

export default function LoginPage({setToken}) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className={styles.loginContainer}>
      <h2>Please Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input 
            id={styles['usernameInput']}
            type="text" 
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            id={styles['passwordInput']}
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <div className={styles.buttonContainer}>
          <button id={styles['loginButton']}type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}