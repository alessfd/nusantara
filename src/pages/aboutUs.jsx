import React from "react";
import Person from "../components/person";
import "../styles.css";
import ales from "../assets/profil/ales.jpeg";
import jim from "../assets/profil/jimmy.jpeg";
import varrel from "../assets/profil/varrel.jpeg";
import sam from "../assets/profil/samuel.jpeg";
import qr from "../assets/images/qr.jpeg";

const AboutUs = () => {
  const profiles = [
    {
      src: ales,
      name: "Alessandro Fayez Devanno",
      nim: "00000106265",
      link: "https://www.instagram.com/aless.fd/",
    },
    {
      src: jim,
      name: "Jimmy Wijaya Tandra",
      nim: "00000092897",
      link: "https://www.instagram.com/jimmytan_13/",
    },
    {
      src: sam,
      name: "Samuel Susilo",
      nim: "00000102827",
      link: "https://www.instagram.com/samuel.x666/",
    },
    {
      src: varrel,
      name: "Varrel Noas Arrazes Sinaga",
      nim: "00000109877",
      link: "https://www.instagram.com/varrelnoasas/",
    },
  ];

  return (
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
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNnDKGJmRYKzjQAa4sdxDc8xMe5YEOy4CwohRwfQ_MBqRZsA/viewform" target="blank" className="flex justify-center">
        <img src={qr} className="w-1/4 hover:scale-110"/>
      </a>
    </div>
  );
};

export default AboutUs;
