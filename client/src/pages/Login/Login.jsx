import "./Login.css";
import {Link} from "react-router-dom";
import { useState } from "react";
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
      method:'POST', 
      mode:'cors', 
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username":username, "password":password}),
      cache: 'default'
    });
    const data = await response.json();
    setUser(data.username);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="login">
        <button className="registerBtn"><Link className="link" to="/register">REGISTER</Link></button>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <h1 className="loginTitle">Login</h1>
            <label htmlFor="username">Username</label>
            <input className="loginInput" type="text" id="username" autoFocus={true} onChange={e => {setEmail(e.target.value)}}/>
            <label  htmlFor="password">Password</label>
            <input className="loginInput" type="password" id="password" onChange={e => {setPassword(e.target.value)}}/>            
            <button className="loginButton" type="submit">Login</button>
            {error && <span>Something went wrong!</span>}
        </form>
    </div>
  )
}

export default Login