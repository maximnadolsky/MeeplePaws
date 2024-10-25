import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then(res => res.text()).then(setMessage);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meeple Paws !!!</h1>
        <div>{message}</div>
      </header>
    </div>
  );
}

export default App;
