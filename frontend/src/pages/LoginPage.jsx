import React, { useState } from 'react';

const LoginPage = () => {
  // State for Login Form
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        credentials: 'include', // Ensure cookies are sent and received
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        setLoginError('');
        setLoginSuccess('Login successful!');
      } else {
        console.error('Error during login:', data.error);
        setLoginError(data.error || 'An error occurred during login');
        setLoginSuccess('');
      }
    } catch (err) {
      console.error('Error:', err);
      setLoginError('An error occurred during login');
      setLoginSuccess('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          required
        />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        {loginSuccess && <p style={{ color: 'green' }}>{loginSuccess}</p>}
        <button type="submit" style={{ padding: '10px 20px', background: '#00bfff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
