import "./Register.css";
import {Link} from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        mode:'cors',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username":username, "email":email, "password":password}),
        cache: 'default'
      });
      response.ok && window.location.replace('/login');
    } catch(err) {
      setError(true);
    }  
  }
 

  return (
    <div className="register">
      <button className="loginBtn"><Link className="link" to="/login">LOGIN</Link></button>
        <form action="" className="registerForm" onSubmit={handleSubmit}> 
            <h1 className="registerTitle">Register</h1>
            <label htmlFor="username">Username</label>
            <input className="registerInput" type="text" id="username" autoFocus={true} onChange={e => setUsername(e.target.value)} value={username}/>
            <label htmlFor="email">Email</label>
            <input className="registerInput" type="email" id="email" onChange={e => setEmail(e.target.value)}/>
            <label  htmlFor="password">Password</label>
            <input className="registerInput" type="password" id="password" onChange={e => setPassword(e.target.value)}/>
            <button className="registerButton" type="submit">Register</button>
            {error && <span>Something went wrong!</span>}
        </form>
    </div>
  )
}

export default Register