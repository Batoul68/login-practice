
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Preferences from '../Preferences/Preferences.jsx';
import LoginPage from '../LoginPage/LoginPage.jsx';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  if (!tokenString) {
    return null;
  }
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {

  const token = getToken();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return(
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App