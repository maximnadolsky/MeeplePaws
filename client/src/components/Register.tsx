import React, { useState } from 'react';
import { register } from '../services/authService';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(username, email, password);
      alert('Register successful');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };


  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleRegister}>Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
export default Register;