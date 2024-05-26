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
      <div className="flex justify-center w-full mb-12">
        <div className="flex justify-center flex-wrap w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-fit">
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
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-4">QR Penilaian</h1>
        <div className="flex justify-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNnDKGJmRYKzjQAa4sdxDc8xMe5YEOy4CwohRwfQ_MBqRZsA/viewform" target="blank" className="flex justify-center w-1/4">
            <img src={qr} className="border-2 rounded-3xl hover:scale-105"/>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
