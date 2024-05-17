import React from "react";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import batuNenek1 from '../assets/pantai/batu-nenek1.jpg'
import batuNenek2 from '../assets/pantai/batu-nenek2.jpg'
import batuNenek3 from '../assets/pantai/batu-nenek3.jpg'
import panjang1 from '../assets/pantai/pasir-panjang1.jpg'
import panjang2 from '../assets/pantai/pasir-panjang2.webp'
import panjang3 from '../assets/pantai/pasir-panjang3.jpg'
import kura1 from '../assets/pantai/kura1.jpg'
import kura2 from '../assets/pantai/kura2.jpg'
import mayang from '../assets/pantai/mayang.jpeg'
import panjang4 from '../assets/pantai/panjang4.jpg'
import kijing from '../assets/pantai/kijing.jpg'


const Pantai = () => {
  const imgBanner = [
    mayang,
    panjang4,
    kijing,
  ];
  const imgBatuNenek = [
    batuNenek1, 
    batuNenek2, 
    batuNenek3,
  ];
  const imgPanjang = [
    panjang1, 
    panjang2, 
    panjang3,
  ];
  const imgKura = [
    kura1, 
    kura2, 
  ];

  return (
    <div>
      <div className="relative">
        <div className="text-overlay h-52 md:h-96  w-full">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of <span className="whitespace-nowrap">Kalimantan Barat Beaches</span>
            </h1>
        </div>
      </div>
      <div>
        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgBatuNenek} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">PANTAI BATU NENEK</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">PANTAI PASIR PANJANG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
          <div className="ml-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgPanjang} />
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgKura} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">PANTAI KURA-KURA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Pantai;
