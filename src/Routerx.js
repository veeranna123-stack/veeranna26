import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1 from './card1'
import {Card2} from './card1'
function Home() {
  return <div style={{display:"flex",flexDirection:'row',boxShadow:'0px 0px 12px black'}}>
    <h2>🏠Hompe page</h2>
    <Card1 />
    <Card2 />
  </div>
}

function About() {
  return <div><h2>ℹ About</h2><h3> Ratan tata was a ceo of tata company </h3>;
  </div>
}

function Contact() {
  return <div><h2>📞 Contact Us</h2><h3> vikram Jalladagi </h3>;
  </div>
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;