import React from "react";
import insta from '../assets/icons/insta.webp';

const Person = ({ images, name, nim, link }) => {
  return (
    <div className="flex flex-col">
      <img
      src={images}
      className="w-32 md:w-48 mx-10 border-4 border-red-100 border-double"
      />
      <h2 className="text-center font-semibold">{name}</h2>
      <h3 className="text-center font-semibold">{nim}</h3>
      <a href={link} className="text-center font-bold flex justify-center mb-12 mt-1"><img src={insta} className="w-6 -center rounded-lg"/></a>
    </div>
  );
};

export default Person;
