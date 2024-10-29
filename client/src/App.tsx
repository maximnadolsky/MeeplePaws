import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text()).then(setMessage);
  }, []);

  return (
    <div>
      <h1>Authentication System</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;
