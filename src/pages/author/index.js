import React from 'react'
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';

export default dynamic(() => Promise.resolve(App), { ssr: false });
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/author/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}