import React from "react";

const Person = ({ images, name, nim }) => {
  return (
    <div className="flex flex-col">
      <img
      src={images}
      className="w-48"
      />
      <h2>{name}</h2>
      <h3>{nim}</h3>
    </div>
  );
};

export default Person;
