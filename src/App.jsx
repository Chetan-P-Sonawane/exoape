import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from "./components/Header";
import Home from "./components/Home"
import Studio from "./components/Studio";
import News from "./components/News";
import Contact from './components/Contact';

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (

    <>
    <Router>
    
      <Header />
   
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
