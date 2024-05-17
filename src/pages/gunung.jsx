import React from "react";
import { Link } from "react-router-dom";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import bawang1 from '../assets/gunung/bawang1.jpg'
import bawang2 from '../assets/gunung/bawang2.jpg'
import raya1 from '../assets/gunung/bukit-raya1.jpeg'
import raya2 from '../assets/gunung/bukit-raya2.jpeg'
import kelam1 from '../assets/gunung/kelam1.webp'
import niut1 from '../assets/gunung/niut1.webp'
import niut2 from '../assets/gunung/niut2.jpg'

//lmao

const Gunung = () => {
  const imgBanner = [
    bawang1,
    raya1,
    kelam1,
  ];
  const imgBawang = [
    bawang2, 
    bawang1, 
  ];
  const imgRaya = [
    raya1, 
    raya2, 
  ];
  const imgNiut = [
    niut1, 
    niut2, 
  ];

  return (
    <div>
      <div className="relative">
        <div className="text-overlay h-52 md:h-96  w-full">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of <span className="whitespace-nowrap">Kalimantan Barat Mountains</span>
            </h1>
        </div>
      </div>

      <div>
        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgBawang} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJfbK2kZJI4zER_2Z0sRKaMPU">
                GUNUNG BAWANG
              </Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJG6glHnNyAC4RveqwUbfMgyo">
                GUNUNG BUKIT RAYA
              </Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
          <div className="ml-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgRaya} />
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgNiut} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJA6Xpfs6i_DER5xRY5_e97yE">
                GUNUNG NIUT
              </Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Gunung;
