import React from "react";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import keraton1 from '../assets/heritage/keraton1.jpg'
import keraton2 from '../assets/heritage/keraton2.jpg'
import makam1 from '../assets/heritage/makam1.jpg'
import makam2 from '../assets/heritage/makam2.jpg'
import makam3 from '../assets/heritage/makam3.jpg'
import tugu1 from '../assets/heritage/tugu1.jpg'
import tugu2 from '../assets/heritage/tugu2.jpg'

const Heritage = () => {
  const imgBanner = [
    keraton1,
    makam3,
    tugu2,
  ];
  const imgKeraton = [
    keraton2, 
    keraton1, 
  ];
  const imgMakam = [
    makam1, 
    makam2, 
  ];
  const imgTugu = [
    tugu1, 
    tugu2, 
  ];

  return (
    <div>
      <div className="relative">
        <div className="text-overlay h-52 md:h-96  w-full">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of <span className="whitespace-nowrap">Kalimantan Barat Heritages</span>
            </h1>
        </div>
      </div>

      <div>
        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgKeraton} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">KERATON KADRIAH</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">MAKAM DON JUANG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
          <div className="ml-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgMakam} />
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgTugu} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">TUGU KHATULISTIWA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Heritage;
