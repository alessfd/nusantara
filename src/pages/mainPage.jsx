import React from "react";
// import MapComponent from "../components/mapComponent";
// import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import initMap from "../components/maps";
import banner from "../assets/images/banner.jpg";

const MainPage = () => {
  initMap()
  return (
    <div className="main-page">
      <div className="relative w-screen z-10">
        <img src={banner}
        className="object-fill"
        />

        <div className="absolute inset-y-1/2 translate-y-1/2 w-screen z-10">
          <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
            Explore the Beauty of Kalimantan Barat
          </h1>
        </div>        
      </div>
      <div id="weatherData"></div>
      <div>
        
      </div>
      <div className="destinasi">
        <div className="wisata">
          <h2>Pantai</h2>
          <div className="gambarWisata">
            <img src={"../assets/pantai/pantai-batu-nenek.jpg"}/>
          </div>
        </div>
        <div className="wisata">
          <h2>Gunung</h2>
        </div>
        <div className="wisata">
          <h2>Situs Bersejarah</h2>
        </div>
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
