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
      <div className="text-overlay bg-black h-16 sm:h-36 w-screen">
        <CarouselBannerCustomNavigation images={imgBanner}/>
      </div>
      <div>
        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgBatuNenek} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

        <div className="flex justify-end">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          <div className="bg-black">
            <CarouselCustomNavigation images={imgPanjang} />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgKura} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

      </div>
    </div>
  ); 
};

export default Pantai;
