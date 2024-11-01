import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text()).then(setMessage);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={token ? <Navigate to="/home" /> : <Register />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login by default */}
      </Routes>
    </Router>
  );
};

export default App;
