import React from "react";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import SearchPlace from "../components/place";
import bawang1 from '../assets/gunung/bawang1.jpg'
import bawang2 from '../assets/gunung/bawang2.jpg'
import raya1 from '../assets/gunung/bukit-raya1.jpeg'
import raya2 from '../assets/gunung/bukit-raya2.jpeg'
import kelam1 from '../assets/gunung/kelam1.webp'
import niut1 from '../assets/gunung/niut1.webp'
import niut2 from '../assets/gunung/niut2.jpg'
import { useParams } from "react-router-dom";

// const id = "ChIJfbK2kZJI4zER_2Z0sRKaMPU"

const Info = () => {
  const { id } = useParams();
  console.log("id: "+id);
  return (
    <SearchPlace placeId={id} />  
  ); 
};

export default Info;