import { useState , useEffect} from 'react'
import './App.css'
import Header from './components/Header';
import Posts from './components/Posts';

function App() { 

  const [posts, setPosts] = useState([])
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch('http://localhost:3000/posts');
      console.log(response)
    }
    fetchPosts()
  },[])

  return (
    <div className="App">
      <Header />      
        <Posts posts = {posts}/>           
    </div>
  )
}

export default App
