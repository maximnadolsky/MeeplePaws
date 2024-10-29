import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text()).then(setMessage);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
        <Route path="/" element={<Login />} /> {/* Redirect to login by default */}
      </Routes>
    </Router>
  );
};

export default App;
