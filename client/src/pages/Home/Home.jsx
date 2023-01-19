import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import{useState, useEffect} from "react";

function Home() {
  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
      const fetchData = async () => {
      const response = await fetch('http://localhost:3000/posts');
      const data = await response.json();
      setPosts(data)      
    }
    fetchData();
  },[]);  

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}

export default Home