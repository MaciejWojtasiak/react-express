import "./Login.css";
import {Link} from "react-router-dom";
function Login() {
  return (
    <div className="login">
        <button className="registerBtn"><Link className="link" to="/register">REGISTER</Link></button>
        <form action="" className="loginForm">
            <h1 className="loginTitle">Login</h1>
            <label htmlFor="email">Email</label>
            <input className="loginInput" type="email" id="email" autoFocus={true}/>
            <label  htmlFor="password">Password</label>
            <input className="loginInput" type="password" id="password"/>            
            <button className="loginButton" type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login