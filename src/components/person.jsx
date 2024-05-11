import React from "react";

const Person = ({ name, nim }) => {
  return (
    <div className="person">
      <h2>{name}</h2>
      <h3>{nim}</h3>
    </div>
  );
};

export default Person;
