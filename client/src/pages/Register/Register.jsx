import "./Register.css";
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <button className="loginBtn"><Link className="link" to="/login">LOGIN</Link></button>
        <form action="" className="registerForm">
            <h1 className="registerTitle">Register</h1>
            <label htmlFor="username">Username</label>
            <input className="registerInput" type="text" id="username" autoFocus={true}/>
            <label htmlFor="email">Email</label>
            <input className="registerInput" type="email" id="email"/>
            <label  htmlFor="password">Password</label>
            <input className="registerInput" type="password" id="password"/>
            <label  htmlFor="confirmPassword">Confirm password</label>
            <input className="registerInput" type="password" id="confirmPassword"/>
            <button className="registerButton" type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register