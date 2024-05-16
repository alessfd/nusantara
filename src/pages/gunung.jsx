import React from "react";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import bawang1 from '../assets/gunung/bawang1.jpg'
import bawang2 from '../assets/gunung/bawang2.jpg'
import raya1 from '../assets/gunung/bukit-raya1.jpeg'
import raya2 from '../assets/gunung/bukit-raya2.jpeg'
import kelam1 from '../assets/gunung/kelam1.webp'
import niut1 from '../assets/gunung/niut1.webp'
import niut2 from '../assets/gunung/niut2.jpg'


const Gunung = () => {
  const imgBanner = [
    bawang1,
    raya1,
    kelam1,
  ];
  const imgBawang = [
    bawang1, 
    bawang2, 
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
      <div className="text-overlay bg-black h-16 sm:h-36 w-screen">
        <CarouselBannerCustomNavigation images={imgBanner}/>
      </div>
      <div>
        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgBawang} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

        <div className="flex justify-end">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          <div className="bg-black">
            <CarouselCustomNavigation images={imgRaya} />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgNiut} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

      </div>
    </div>
  ); 
};

export default Gunung;
