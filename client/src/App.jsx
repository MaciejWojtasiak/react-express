import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Page from "./pages/Page/Page";

function App() { 
  
  return (
    <div className="App">   
      <Navbar />      
      <Page />     
      {/* <Home/> */}
    </div>
  )
}

export default App
