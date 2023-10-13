import React from 'react'
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from "./admin"
import Home from "./home"
import Projectdata from './projectdata';
import Upload from './upload';

export default dynamic(() => Promise.resolve(App), { ssr: false });
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/projectdata" element={<Projectdata />} />
        <Route path="/admin/upload" element={<Upload />} />
      </Routes>
    </Router>
    </>
  )
}
