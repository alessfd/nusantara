import React from "react";
import Person from "../components/person";
import "../styles.css";

const AboutUs = () => {
  const profiles = [
    {
      name: "Alessandro Fayez",
      nim: "00000106265",
    },
    {
      name: "Jimmy Wijaya",
      nim: "00000092897",
    },
    {
      name: "Samuel Susilo",
      nim: "00000102827",
    },
    {
      name: "Varrel Noas",
      nim: "00000109877",
    },
  ];

  return (
    <div className="about-us">
      <div>
        <h1>About Us</h1>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <Person key={index} name={profile.name} nim={profile.nim} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
