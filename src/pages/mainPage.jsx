import React from "react";
// import MapComponent from "../components/mapComponent";
// import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
// import initMap from "../components/maps";
import banner from "../assets/images/banner.jpg";
import pantaiPoster from "../assets/images/pantaiBanner.jpg";
import gunungPoster from "../assets/images/gunungBanner.jpg";
import tuguPoster from "../assets/images/tuguBanner.jpg";



const MainPage = () => {
  return (
    <div className="main-page h-screen lg:h-fit">
      <div className="relative h-4/6 lg:h-fit inset-x-1/2 transform -translate-x-1/2 w-11/12 z-10 rounded-xl">
        <div className="h-full lg:h-full">
          <img src={banner}
          className="h-full w-full object-cover object-center rounded-xl"
          />
          <div className="absolute top-0 h-full w-full z-10">
            <div className="flex flex-col justify-center content-center h-full">
              <div className="h-min">
                <h1 className="overflow-hidden whitespace-wrap text-ellipsis text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
                  <a>Explore the Beauty of Kalimantan Barat</a>
                </h1>
              </div>
              
            </div>
          </div>        
        </div>
        <div id="weatherData"></div>
      </div>

      <div className="flex p-4 sm:p-8 h-fit lg:h-3/5 justify-around">
        <div className="mr-4 sm:mr-8 hover:scale-125 lg:hover:scale-110 transition duration-300">
            <Link to="/pantai" className="relative"> 
              <img src={pantaiPoster} className="w-full h-full rounded-xl object-cover"/>
              <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">BEACH</h1>
            </Link>
        </div>
        <div className="hover:scale-125 lg:hover:scale-110 transition duration-300">
          <Link to="/gunung" className="relative">
            <img src={gunungPoster} className="w-full h-full object-cover rounded-xl"/>
            <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">MOUNTAIN</h1>
          </Link>
        </div>
        <div className="ml-4 sm:ml-8 hover:scale-125 lg:hover:scale-110 transition duration-300">
          <Link to="/situs-bersejarah" className="relative">
            <img src={tuguPoster} className="w-full h-full object-cover rounded-xl"/>
            <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">HERITAGE</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
