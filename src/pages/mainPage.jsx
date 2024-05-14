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
      <header>
        <img src={banner} />
      </header>
      <div id="weatherData"></div>

      <div>
        <h2>Explore the Beauty of Kalimantan Barat</h2>
      </div>
      <div className="destinasi">
        <div className="wisata">
          <h2>Pantai</h2>
          <div className="gambarWisata">
            <img src={"../assests/pantai/pantai-batu-nenek.jpg"}/>
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
