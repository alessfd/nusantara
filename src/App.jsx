import { useState } from 'react'
import Navbar from "./components/navbar";
import MainPage from "./pages/mainPage";
import AboutUs from "./pages/aboutUs";
import Pantai from './pages/pantai';
import Gunung from './pages/gunung';
import Heritage from './pages/heritage';
import { Route, Routes } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader"
import Copyright from './components/copyright';
// import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="relative object-cover z-0">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pantai" element={<Pantai />} />
          <Route path="/gunung" element={<Gunung />} />
          <Route path="/situs-bersejarah" element={<Heritage />} />
        </Routes>
      </div>
      <Copyright /> 


      {/* <div id="weatherData"></div> */}
    </>
  )
}

export default App
