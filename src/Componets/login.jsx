import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Componets/AuthContextProvider'; // Assuming you have an AuthContext defined

function Login() {
    const [emailLogin, setEmailLogin] = useState("");

    const [passwordLogin, setPasswordLogin] = useState("");
    const { login } = useContext(AuthContext); // Assuming AuthContext provides a login function

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailLogin,
                password: passwordLogin
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.token)
                login(data.token)

            })

    }

    return (
        <>
        <h1>login</h1>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} /><br />
                <label>Password</label>
                <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Login;
