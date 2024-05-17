import React from "react";
// import MapComponent from "../components/mapComponent";
// import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import initMap from "../components/maps";
import banner from "../assets/images/banner.jpg";
import pantaiPoster from "../assets/images/pantaiBanner.jpg";
import gunungPoster from "../assets/images/gunungBanner.jpg";
import tuguPoster from "../assets/images/tuguBanner.jpg";



const MainPage = () => {
  return (
    <div className="main-page h-full">
      <div className="relative sm:h-5/6 lg:h-fit inset-x-1/2 transform -translate-x-1/2 w-11/12 z-10 rounded-xl">
        <div className="sm:h-full lg:h-full">
          <img src={banner}
          className="h-full w-full object-cover object-center rounded-xl"
          />
          <div className="absolute top-0 h-full w-full z-10">
            <div className="flex flex-col justify-center content-center h-full">
              <div className="h-min">
                <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
                  <a>Explore the Beauty of</a>
                  <br/>
                  <span className="whitespace-nowrap">Kalimantan Barat</span>
                </h1>
              </div>
              
            </div>
          </div>        
        </div>
        <div id="weatherData"></div>
      </div>

      <div>
        
      </div>
      <div className="flex mt-10 mb-10 ml-12 h-3/5 justify-center">
        <Link to="/pantai" className="w-1/3 relative"> 
          <img src={pantaiPoster} className="w-full h-full rounded-xl object-cover"/>
          <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-2xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">PANTAI</h1>
        </Link>
        <Link to="/gunung" className="w-1/3 mx-8 relative">
          <img src={gunungPoster} className="w-full h-full object-cover rounded-xl"/>
          <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-2xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">GUNUNG</h1>
        </Link>
        <Link to="/situs-bersejarah" className="w-1/3 mr-12 relative">
          <img src={tuguPoster} className="w-full h-full object-cover rounded-xl"/>
          <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-2xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full overflow-hidden whitespace-wrap text-ellipsis">SITUS BERSEJARAH</h1>
        </Link>
      </div>

      <div>
        <div id="map" className="w-full"></div>
      </div>

      {/* <div className="map-api"></div>
      <section className="map-section"> */}
      {/* <MapComponent /> */}
      {/* </section> */}
      {/* <footer><BottomNavbar /></footer> */}
    </div>
  );
};

export default MainPage;
