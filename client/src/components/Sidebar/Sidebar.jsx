import "./Sidebar.css";
import { useState ,useEffect} from "react";
function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async () => {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json()
      setCategories(data);
    }
    getCategories();
  },[])

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
          { categories.map((category)=>(
            <Link to={`/?cat=${category}`}>
              <li className="sidebarListItem">{category}</li>
            </Link>
          )                   
          )}          
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