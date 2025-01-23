import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '1 00%',
      backgroundColor: '#f7f7f7',
    }}
  >
    <div
      style={{
        maxWidth: '400px',
        width: '100%',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '40px',
        backgroundColor: '#fff',
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '0rem' }}>
        Login Form
      </h2>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}></h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '2rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              color: '#000', // Text color
              backgroundColor: '#fff', // Box color
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              color: '#000', // Text color
              backgroundColor: '#fff', // Box color
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Login
        </button>
      </form>
    </div>
  </div>
  
  );
}

export default LoginForm;