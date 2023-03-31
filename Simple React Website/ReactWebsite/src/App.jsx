import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navigation_Bar from './Componenets/Navigation_Bar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Componenets/Footer';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
function App() {
  const [ openLinks, setOpenLinks ] = useState( false );

  function toggleNavBar(){
    setOpenLinks( !openLinks );
    // console.log("toggle navigaion bar :)");
  }
  
  return (
    <div className="App">
      <Router>

        <Navigation_Bar toggleNavBar = {toggleNavBar}/>
        {/* Display navbar  */}
        {
          openLinks &&(
                <div className="dropdown">
                    <Link to="/" className='link-style'> Home </Link>
                    <Link to="/about" className='link-style'> About </Link>
                    <Link to="/menu" className='link-style'> Menu </Link>
                    <Link to="/contact" className='link-style'> Contact </Link>
                </div> 
                )
        }
        <Routes>
          <Route path="/" exact Component={Home}/>
          {/* Display homepage when url path is '/' */}

          <Route path="/about" exact Component={About}/>
          {/* Display about section when url path is '/about' */}

          <Route path="/menu" exact Component={Menu}/>
          {/* Displays the menu section  */}

          <Route path="/contact" exact Component={Contact}/>
          {/* Displays the menu section  */}

        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App