import useToken from './useToken.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Preferences from '../Preferences/Preferences.jsx';
import LoginPage from '../LoginPage/LoginPage.jsx';

function App() {

  const { token, setToken } = useToken();

  return(
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute token={token}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/preferences" 
            element={
              <ProtectedRoute token={token}>
                <Preferences />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App