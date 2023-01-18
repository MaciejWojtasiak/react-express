import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarPhoto" src="/src/assets/sidebar_photo.jpg" alt="sidebar_photo" />
        <p>
          Lorem, ipsum dolor sit amet consectetur
           adipisicing elit. Consequuntur reprehenderit ad sapiente
            eos voluptatem velit atque ipsa eveniet assumenda facilis!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sideabrSocial">
            <i className="navLeftItem fa-brands fa-facebook"></i>
            <i className="navLeftItem fa-brands fa-twitter"></i>
            <i className="navLeftItem fa-brands fa-instagram"></i>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar