import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Registration.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users', {
                username,
                email,
                password
            });
            console.log('User Registered', response.data);
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log("Error Occurred: " + error.response.data.error);
        }
    }

    return (
        <div className="registration-container">
            <div className="registration-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

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
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Registration;
