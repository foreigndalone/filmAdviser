import React, { useState } from "react";
import {InputWithLabel, GenreRadio, AgeInput } from "../components/InputWithLabel";
import { signUp, loginUp } from "../utilis/fetchData";
import { Navigate, useNavigate } from "react-router";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUp({ email, password });

    if (res?.user) {
      navigate("/update");
    }
  };
    return (
        <div>
            <h2>Login Up</h2>
            <p>Do not have an account? <a onClick={()=>navigate('/signUp')}>Sign Up</a></p>

            <form onSubmit={handleSubmit}>
                <InputWithLabel
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    setData={setEmail}
                />

                <InputWithLabel
                    label="Password"
                    id="password"
                    type="password"
                    value={password}
                    setData={setPassword}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};




export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signUp({ email, password });

    if (res?.user) {
      navigate("/update");
    }
  };
    return (
        <div>
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <InputWithLabel
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    setData={setEmail}
                />

                <InputWithLabel
                    label="Password"
                    id="password"
                    type="password"
                    value={password}
                    setData={setPassword}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};




// -- CREATE TABLE users (
// --     id SERIAL PRIMARY KEY,
// --     email VARCHAR(255) UNIQUE NOT NULL,
// --     password VARCHAR(255) NOT NULL,

// --     -- Optional profile info
// --     age INT,
// --     gender VARCHAR(20),

// --     -- Preferences
// --     favorite_genres INT[] DEFAULT '{}',   -- массив жанров TMDB
// --     favorite_year_from INT,
// --     favorite_year_to INT,

// --     created_at TIMESTAMP DEFAULT NOW()
// -- );