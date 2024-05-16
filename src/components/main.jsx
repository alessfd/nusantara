// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import MainPage from '../pages/mainPage';
import AboutUs from '../pages/aboutUs';
import '../App.css';
import Pantai from '../pages/pantai';
import Heritage from '../pages/heritage';

function Main() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/pantai' element={<Pantai />} />
            <Route path='/gunung' element={<Gunung />} />
            <Route path='/situs-bersejarah' element={<Heritage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;
