import { useState } from 'react'
import Navbar from "./components/navbar";
import MainPage from "./pages/mainPage";
import AboutUs from "./pages/aboutUs";
import { Route, Routes } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>


      {/* <div id="weatherData"></div> */}
    </>
  )
}

export default App
