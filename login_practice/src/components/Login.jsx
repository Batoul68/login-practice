import React, { useState, useEffect } from 'react';

export default function Login() {

  const Users = new Map();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errorDisplay = document.getElementById("error");

  Users.set('Melly123', 'Tunip123$');

  useEffect(() => {
    if (isLoggedIn) {
      document.title = "Welcome";
    }
    else {
      document.title = "Login to App";
    }
  }, [isLoggedIn]);

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function handleLogIn() {
    // Check if username exists
    const exists = checkIfUsernameExists(username);

    // Check if password matches username
    if (exists) {
      if (Users.get(username) === password) {
        console.log("Your password matches");
        setIsLoggedIn(true);
        errorDisplay.textContent = "";
      }
      else {
        errorDisplay.textContent = "Incorrect Password";
        setIsLoggedIn(false);
      }
    }
    else {
      errorDisplay.textContent = "Username not found";
      setIsLoggedIn(false);
    }

    // Clear input boxes
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

  function checkIfUsernameExists(name) {
    if (Users.has(name)) {
      return true;
    }
    else {
      return false;
    }
  }

  return(
    <>
      <div className="login-container">
        <h2 id="error"></h2>
        <input id="username" placeholder="Username" onChange={updateUsername}/>
        <input type="password" id="password" placeholder="Password" onChange={updatePassword}/>
        <button id="login-button" onClick={handleLogIn}>Log in</button>
      </div>
    </>
  );
}