import "./Login.css";
import {Link} from "react-router-dom";
import { useRef, useContext } from "react";
import {Context} from "../../context/Context";

function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch("LOGIN_START");     
      
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
      method:'POST', 
      mode:'cors', 
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:userRef.current.value, password:passwordRef.current.value}),
      cache: 'default'
    });     
      const data = await response.json();
      response.ok && dispatch({type: "LOGIN_SUCCESS", payload: data});
      userRef.current.value = '';
      passwordRef.current.value = '';
      window.location.replace('/');
    } catch (err) {
      console.log(err)
      dispatch("LOGIN_FAILURE");
    }
    
  }

  return (
    <div className="login">
        <button className="registerBtn"><Link className="link" to="/register">REGISTER</Link></button>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <h1 className="loginTitle">Login</h1>
            <label htmlFor="username">Username</label>
            <input className="loginInput" type="text" id="username" autoFocus={true} ref={userRef}/>
            <label  htmlFor="password">Password</label>
            <input className="loginInput" type="password" id="password" ref={passwordRef}/>            
            <button className="loginButton" type="submit" >Login</button>
        </form>
    </div>
  )
}

export default Login