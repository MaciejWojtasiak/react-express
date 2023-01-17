import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navLeft">
            <i className="navLeftItem fa-brands fa-facebook"></i>
            <i className="navLeftItem fa-brands fa-twitter"></i>
            <i className="navLeftItem fa-brands fa-instagram"></i>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem">HOME</li>
                <li className="navListItem">ABOUT</li>
                <li className="navListItem">CONTACT</li>
                <li className="navListItem">WRITE</li>
                <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="navRight">
            <img src="https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?b=1&s=612x612&w=0&k=20&c=3l2mvXVqrSiU3593B897Yk-WYtpZ3xJhnmqI22dVhYQ=" alt="avatar" />
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar