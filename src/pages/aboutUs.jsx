import React from "react";
import Person from "../components/person";
import "../styles.css";
import red from "../assets/profil/red.webp";
import blue from "../assets/profil/blue.webp";
import black from "../assets/profil/black.webp";
import pink from "../assets/profil/pink.webp";

const AboutUs = () => {
  const profiles = [
    {
      src: red,
      name: "Alessandro Fayez",
      nim: "00000106265",
    },
    {
      src: blue,
      name: "Jimmy Wijaya",
      nim: "00000092897",
    },
    {
      src: black,
      name: "Samuel Susilo",
      nim: "00000102827",
    },
    {
      src: pink,
      name: "Varrel Noas",
      nim: "00000109877",
    },
  ];

  return (
    <div className="about-us">
      <div>
        <h1>About Us</h1>
        <div className="flex justify-between">
          {profiles.map((profile, index) => (
            <Person key={index} images={profile.src} name={profile.name} nim={profile.nim} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
