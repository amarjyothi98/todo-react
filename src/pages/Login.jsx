import React, { useState } from 'react';
import './common.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Login (handleLogin) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
      e.preventDefault();
    //   handleLogin({ email });
        navigate('/home'); 
    };

    return (
        <>
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="input-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Login</button>
            </form>

            <p>Don't have an account ? <Link to='/signup'>Sign Up</Link> </p>
        </div>
        </>
    )
}