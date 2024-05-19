import React from "react";
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import banner from "../assets/images/banner.jpg";
import pantaiPoster from "../assets/images/pantaiBanner.jpg";
import gunungPoster from "../assets/images/gunungBanner.jpg";
import tuguPoster from "../assets/images/tuguBanner.jpg";



const MainPage = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

  const posterRefs = useRef([]);

  useEffect(() => {
    posterRefs.current = [
      document.querySelector("#poster1"),
      document.querySelector("#poster2"),
      document.querySelector("#poster3"),
    ];
  }, []);

  return (
    <div className="main-page h-screen items-center lg:h-fit">
      <Transition
        show={showBanner}
        enter="transition-opacity duration-1500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative h-4/6 lg:h-fit inset-x-1/2 transform -translate-x-1/2 w-11/12 z-10 rounded-xl mb-2">
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
        </div>
      </Transition>

      <div className="flex py-4 px-8 sm:px-16 h-fit lg:h-3/5 justify-around">
      <Transition
          appear
          show={showBanner}
          enter="transition duration-1000"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition duration-500"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <div className="mr-4 sm:mr-8 hover:scale-125 lg:hover:scale-110 transition duration-300">
              <Link to="/pantai" className="relative"> 
                <div id="poster1" ref={(el) => (posterRefs.current[0] = el)} className="w-full h-full rounded-xl object-cover">
                  <img src={pantaiPoster} className="w-full h-full rounded-xl object-cover"/>
                  <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">BEACH</h1>
                </div>
              </Link>
          </div>
        </Transition>
        <Transition
          appear
          show={showBanner}
          enter="transition duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition duration-500"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <div className="hover:scale-125 lg:hover:scale-110 transition duration-300">
            <Link to="/gunung" className="relative">
              <div id="poster2" ref={(el) => (posterRefs.current[1] = el)} className="w-full h-full rounded-xl object-cover">
                <img src={gunungPoster} className="w-full h-full object-cover rounded-xl"/>
                <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">MOUNTAIN</h1>
              </div>
            </Link>
          </div>
        </Transition>
        <Transition
          appear
          show={showBanner}
          enter="transition duration-1000"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition duration-500"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <div className="ml-4 sm:ml-8 hover:scale-125 lg:hover:scale-110 transition duration-300">
            <Link to="/situs-bersejarah" className="relative">
              <div id="poster3" ref={(el) => (posterRefs.current[2] = el)} className="w-full h-full rounded-xl object-cover">
                <img src={tuguPoster} className="w-full h-full object-cover rounded-xl"/>
                <h1 className="select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-md md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">HERITAGE</h1>
              </div>
            </Link>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default MainPage;
