import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { disableScroll, enableScroll } from './utils/scrollLock';
import ScrollToTop from "./utils/ScrollToTop"

import Header, { NavPopup } from "./components/Header";
import Home from "./pages/Home"
import Studio from "./pages/Studio";
import News from "./pages/News";
import Contact from './pages/Contact';

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  const [menuOpen,setmenuOpen] = useState(false)
  console.log(menuOpen)

  useEffect(() => {
    if (menuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll(); // Clean up on unmount
    };
  }, [menuOpen]);


  return (

    <>
    <Router>
       <ScrollToTop />
      <NavPopup menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
   
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/studio" element={<Studio />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
