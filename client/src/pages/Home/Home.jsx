import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import{useState, useEffect} from "react";
import {useLocation } from "react-router";


function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  
  useEffect(()=>{
      const fetchData = async () => {
      const response = await fetch('http://localhost:3000/posts' + search);
      const data = await response.json();
      setPosts(data)      
    }
    fetchData();
  },[search]);  

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