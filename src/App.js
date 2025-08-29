import "./App.css";
import Home from "./Components/Home";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import MobileNav from "./Components/MobileNav";
import EBC from "./Components/EBC";
import PPC from "./Components/PPC";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop'
import Contact from './Components/Contact';
import Service from './Components/Service'
import { useEffect } from "react";
import { useState } from "react";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app hero">

      <BrowserRouter>
        <ScrollToTop></ScrollToTop>

        <div className='d-sm-block  d-none ' >
          <Navbar></Navbar>
        </div>

        <div className='d-sm-none  d-block' >
          <MobileNav ></MobileNav>
        </div>
       

        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route path="/about" element={<About></About>} />
          <Route path="/service" element={<Service></Service>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/ebc" element={<EBC></EBC>} />
          <Route path="/ppc" element={<PPC></PPC>} />



        </Routes>
        
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
