import React from 'react'
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './home';
import Graphic from "./graphic"
import Website from './website'
import About from './about';
import Contact from './contact';
import Digitalart from './digitalart';
import Aiart from './aiart';
import Photography from './photography';
import Feedback from './feedback';


import Errorpage from './_error';
import Admin from './admin';


export default dynamic(() => Promise.resolve(App), { ssr: false });
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/website" element={<Graphic/>} />
        <Route path="/graphic" element={<Website/>} />
        <Route path="/digitalart" element={<Digitalart />} />
        <Route path="/aiart" element={<Aiart />} />
        <Route path="/photography" element={<Photography />} />
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/404" element={<Errorpage />} />
      </Routes>
    </Router>
    </>
  )
}
