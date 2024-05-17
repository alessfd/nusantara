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
      name: "Alessandro Fayez Devanno",
      nim: "00000106265",
      link: "https://www.instagram.com/aless.fd/",
    },
    {
      src: blue,
      name: "Jimmy Wijaya Tandra",
      nim: "00000092897",
      link: "https://www.instagram.com/jimmytan_13/",
    },
    {
      src: black,
      name: "Samuel Susilo",
      nim: "00000102827",
      link: "https://www.instagram.com/samuel.x666/",
    },
    {
      src: pink,
      name: "Varrel Noas Arrazes Sinaga",
      nim: "00000109877",
      link: "https://www.instagram.com/varrelnoasas/",
    },
  ];

  return (
    <div className="about-us">
      <div>
        <h1 className="text-3xl font-bold text-start ml-10 mb-10">About Us</h1>
        <div className="flex justify-center flex-wrap">
          {profiles.map((profile, index) => (
            <Person key={index} 
            images={profile.src} 
            name={profile.name} 
            nim={profile.nim} 
            link={profile.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
