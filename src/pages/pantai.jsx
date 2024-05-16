import React from "react";
import CarouselComponent from "../components/carousel";
import nenek1 from '../assets/pantai/batu-nenek1.jpg'
import nenek2 from '../assets/pantai/batu-nenek2.jpg'
import nenek3 from '../assets/pantai/batu-nenek3.jpg'
import panjang1 from '../assets/pantai/pasir-panjang1.jpg'
import panjang2 from '../assets/pantai/pasir-panjang2.webp'
import panjang3 from '../assets/pantai/pasir-panjang3.jpg'
import kura1 from '../assets/pantai/kura1.jpg'
import kura2 from '../assets/pantai/kura2.jpg'

const imgBatuNenek = [
  { src: 'nenek1'},
  { src: 'nenek2'},
  { src: 'nenek3'},
];

const Pantai = () => {
  return (
    <div>
      <h2>PANTAI</h2>
      <CarouselComponent images={imgBatuNenek}/>
    </div>
  ); 
};

export default Pantai;
