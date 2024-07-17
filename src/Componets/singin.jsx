import React, { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(e) {
        e.preventDefault();
        console.log(email, password);

        localStorage.setItem("email",email)
        localStorage.setItem("password",password)

        setEmail("")
        setPassword("")
    }

    return (
        <>

        <h1>sign in</h1>
            <form onSubmit={handleSignIn}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br></br>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default SignIn;
