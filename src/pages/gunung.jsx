import React from "react";
import { Link } from "react-router-dom";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import bawang1 from '../assets/gunung/bawang1.jpg'
import bawang2 from '../assets/gunung/bawang2.jpg'
import raya1 from '../assets/gunung/bukit-raya1.jpeg'
import raya2 from '../assets/gunung/bukit-raya2.jpeg'
import kelam1 from '../assets/gunung/kelam1.webp'
import niut1 from '../assets/gunung/niut1.webp'
import niut2 from '../assets/gunung/niut2.jpg'
import linkLogo from '../assets/icons/link.png'

const Gunung = () => {
  const imgBanner = [
    bawang1,
    raya1,
    kelam1,
  ];
  const imgBawang = [
    bawang2, 
    bawang1, 
  ];
  const imgRaya = [
    raya1, 
    raya2, 
  ];
  const imgNiut = [
    niut1, 
    niut2, 
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <div className="relative">
        <div className="text-overlay h-52 md:h-96 w-screen">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of Kalimantan Barat Mountains
            </h1>
        </div>
      </div>

      <div className="flex flex-col w-full items-center px-16">
        <div className="mt-10 mb-10 flex justify-start flex-col lg:flex-row max-w-96 lg:max-w-6xl">
          <div className="lg:mr-5 max-w-96 min-w-80 max-h-60 min-h-8 mb-12">
            <CarouselCustomNavigation images={imgBawang} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJfbK2kZJI4zER_2Z0sRKaMPU" className="flex whitespace-pre hover:text-blue-900">
                GUNUNG BAWANG
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg text-justify">Gunung Bawang merupakan sebuah gunung yang terdapat di Provinsi Kalimantan Barat, Indonesia. Gunung ini mempunyai bentuk menyerupai pegunungan karena memanjang sekira 18 Km mencakup 4 kecamatan di Kabupaten Bengkayang. Gunung Bawang memiliki empat puncak runcing yang memiliki ketinggian lebih dari 1.000 Mdpl. Puncak tertingginya bernama Puncak Bawang Raya dengan tinggi mencapai 1.490 Mdpl. Gunung Bawang adalah salah satu gunung yang dikeramatkan oleh Suku Dayak.</p>
          </div>
        </div>

        <div className="mt-10 mb-10 flex justify-start items-center flex-col-reverse lg:flex-row max-w-96 lg:max-w-6xl">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJG6glHnNyAC4RveqwUbfMgyo" className="whitespace-pre flex hover:text-blue-900">
                GUNUNG BUKIT RAYA
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg text-justify">Gunung Bukit Raya dengan puncaknya yang dinamakan Puncak Kakam memiliki ketinggian 2.278 meter diatas permukaan laut. Gunung yang berada didalam Taman Nasional Bukit Baka Bukit Raya ini memiliki puncak yang dinyatakan sebagai titik tertinggi Pulau Kalimantan bagian Indonesia. Gunung ini terletak di dua provinsi yaitu Kalimantan Tengah dan Kalimantan Barat. Meskipun puncak gunungnya berada di wilayan Kalimantan Tengah, akan tetapi jalur pendakian terdekat dan sering digunakan adalah jalur dari Kalimantan Barat.</p>
          </div>
          <div className="lg:ml-5 w-96 min-w-80 max-h-60 mb-12">
            <CarouselCustomNavigation images={imgRaya} />
          </div>
        </div>

        <div className="mt-10 mb-10 flex justify-start flex-col lg:flex-row max-w-96 lg:max-w-6xl">
          <div className="lg:mr-5 max-w-96 min-w-80 max-h-60 min-h-8 mb-12">
            <CarouselCustomNavigation images={imgNiut} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJA6Xpfs6i_DER5xRY5_e97yE" className="flex whitespace-pre hover:text-blue-900">
                GUNUNG NIUT
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg text-justify">Gunung Niut adalah sebuah gunung yang terletak di tiga kabupaten yaitu Kabupaten Bengkayang, Kabupaten Landak dan kabupaten Sanggau Provinsi Kalimantan Barat, Indonesia. Gunung ini adalah gunung tertinggi di Provinsi Kalimantan Barat dengan ketinggian mencapai 1.701 meter di atas permukaan air laut.Indonesia Jalur pendakian menuju Gunung Niut terdapat tiga jalur. Yaitu Jalur Dawar, Serimbu, Tamong, Sungkung dan Balai Karangan. Namun jalur Dawar di Dusun Dawar, Desa Pisak, Kecamatan Tujuh Belas, Kabupaten Bengkayang menjadi jalur paling mudah dan direkomendasikan.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Gunung;