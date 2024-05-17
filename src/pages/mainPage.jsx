import React from "react";
// import MapComponent from "../components/mapComponent";
// import BottomNavbar from "../components/bottomNavbar";
import banner from "../assets/images/banner.jpg";

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
