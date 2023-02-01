import "./Navbar.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import {Context} from "../../context/Context";

function Navbar() {    

    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
        localStorage.removeItem('user');
        window.location.replace('/');
    }
  return (
    <div className="navbar">
        <div className="navLeft">
            <i className="navLeftItem fa-brands fa-facebook"></i>
            <i className="navLeftItem fa-brands fa-twitter"></i>
            <i className="navLeftItem fa-brands fa-instagram"></i>
        </div>
        <div className="navCenter">
            <ul className="navList">                
                <li className="navListItem"><Link to='/' className="link">HOME</Link></li>
                <li className="navListItem"><Link to='/about' className="link">ABOUT</Link></li>
                <li className="navListItem"><Link to='/contact' className="link">CONTACT</Link></li>
                <li className="navListItem"><Link to='/write' className="link">{user && "WRITE"}</Link></li>
                <li className="navListItem link" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="navRight">
            {user ? (<img src="https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?b=1&s=612x612&w=0&k=20&c=3l2mvXVqrSiU3593B897Yk-WYtpZ3xJhnmqI22dVhYQ=" alt="avatar" />) : (
                <>
                    <Link className="link" to="/login">LOGIN</Link>
                    <Link className="link" to="/register">REGISTER</Link>
                </>
            )}
            
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar