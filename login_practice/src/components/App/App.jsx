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
          <Route element={<ProtectedRoute token={token}/>}>
            <Route 
              path="/dashboard" 
              element={<Dashboard />}/>
            <Route 
              path="/preferences" 
              element={<Preferences />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App