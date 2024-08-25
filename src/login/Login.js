import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });
            
            if (response.data.success) {
                navigate('/', { state: { username: response.data.username } });
            } else {
                setError('Invalid email or password');
            }
            
            setError('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.response?.data?.error || "Login failed");
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
                <Link to="/registration">Registration</Link>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
