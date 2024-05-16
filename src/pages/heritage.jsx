import React from "react";
import { CarouselCustomNavigation } from "../components/carousel"
import keraton1 from '../assets/heritage/keraton1.jpg'
import keraton2 from '../assets/heritage/keraton2.jpg'
import makam1 from '../assets/heritage/makam1.jpg'
import makam2 from '../assets/heritage/makam2.jpg'
import makam3 from '../assets/heritage/makam3.jpg'
import tugu1 from '../assets/heritage/tugu1.jpg'
import tugu2 from '../assets/heritage/tugu2.jpg'

const Heritage = () => {
  const imgBanner = [
    keraton2,
    makam3,
    tugu2,
  ];
  const imgKeraton = [
    keraton1, 
    keraton2, 
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
      <div className="text-overlay bg-black h-16 sm:h-36 w-screen">
        <CarouselCustomNavigation images={imgBanner}/>
      </div>
      <div>
        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgKeraton} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

        <div className="flex justify-end">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
          <div className="bg-black">
            <CarouselCustomNavigation images={imgMakam} />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-black">
            <CarouselCustomNavigation images={imgTugu} />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod interdum felis id dignissim. Praesent eleifend, nibh at molestie gravida, ex dui malesuada ex, eu rutrum sapien sem eget felis. Aenean consequat rhoncus mauris quis feugiat. Nullam sodales consequat consectetur. Donec non vulputate mi. Donec eget arcu condimentum, interdum lacus sit amet, lacinia lorem. Nam tincidunt nunc ac lacus consequat dapibus.</p>
        </div>

      </div>
    </div>
  ); 
};

export default Heritage;
