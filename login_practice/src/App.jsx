import LoginPage from './components/LoginPage/LoginPage.jsx';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Preferences from './components/Preferences/Preferences.jsx';
import './App.css';

function App() {

  const [token, setToken] = useState();

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