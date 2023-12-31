import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home'; 
import About from './components/Aboutt';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>

    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;