// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import MainPage from '../pages/mainPage';
import AboutUs from '../pages/aboutUs';
import '../App.css';

function Main() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;
