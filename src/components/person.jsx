import React from "react";
import insta from '../assets/icons/insta.webp';

const Person = ({ images, name, nim, link }) => {
  return (
    <div className="flex flex-col mb-4">
      <img
      src={images}
      className="w-48 h-60 object-cover mx-10 border-4 border-red-100 border-double rounded-lg"
      />
      <h2 className="text-center font-semibold">{name}</h2>
      <h3 className="text-center font-semibold">{nim}</h3>
      <div className="flex justify-center">
        <a href={link} className="text-center font-bold flex justify-center mt-1" target="blank"><img src={insta} className="w-6 -center rounded-lg hover:scale-125 transition duration-100"/></a>
      </div>
    </div>
  );
};

export default Person;
