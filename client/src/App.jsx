import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Page from "./pages/Page/Page";
import Settings from "./pages/Settings/Settings";
import Write from "./pages/Write/Write";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import { useContext } from 'react';
import {Context} from "../src/context/Context";

function App() { 
  const {user} = useContext(Context);
  return (
    <div className="App">   
    <Router>
     <Navbar />       
      <Routes>   
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/write' element={<Write />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={user ?<Home/> : <Register />} />    
        <Route path='/post/:id' element={<Page />} />    
      </Routes>
    </Router>
    </div>
  )
}

export default App
