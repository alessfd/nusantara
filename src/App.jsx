import { useState } from 'react'
import Navbar from "./components/navbar";
import MainPage from "./pages/mainPage";
import AboutUs from "./pages/aboutUs";
import Pantai from './pages/pantai';
import Gunung from './pages/gunung';
import Heritage from './pages/heritage';
import Info from './pages/info';
import { Route, Routes } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader"
import Copyright from './components/copyright';
// import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hover:scrollbar-thumb-teal-800 active:scrollbar-thumb-teal-700 h-screen scrollbar scrollbar-thumb-teal-900 overflow-y-scroll">
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pantai" element={<Pantai />} />
          <Route path="/gunung" element={<Gunung />} />
          <Route path="/situs-bersejarah" element={<Heritage />} />
          <Route path="/info" element={<Info />}>
            <Route path=":id" />
          </Route>
        </Routes>

        <Copyright /> 


        {/* <div id="weatherData"></div> */}
      </div>
    </>
  )
}

export default App
