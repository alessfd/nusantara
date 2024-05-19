import React from "react";
import { Link } from "react-router-dom";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import batuNenek1 from '../assets/pantai/batu-nenek1.jpg'
import batuNenek2 from '../assets/pantai/batu-nenek2.jpg'
import batuNenek3 from '../assets/pantai/batu-nenek3.jpg'
import panjang1 from '../assets/pantai/pasir-panjang1.jpg'
import panjang2 from '../assets/pantai/pasir-panjang2.webp'
import panjang3 from '../assets/pantai/pasir-panjang3.jpg'
import kura1 from '../assets/pantai/kura1.jpg'
import kura2 from '../assets/pantai/kura2.jpg'
import mayang from '../assets/pantai/mayang.jpeg'
import panjang4 from '../assets/pantai/panjang4.jpg'
import kijing from '../assets/pantai/kijing.jpg'
import linkLogo from '../assets/icons/link.png'


const Pantai = () => {
  const imgBanner = [
    mayang,
    panjang4,
    kijing,
  ];
  const imgBatuNenek = [
    batuNenek1, 
    batuNenek2, 
    batuNenek3,
  ];
  const imgPanjang = [
    panjang1, 
    panjang2, 
    panjang3,
  ];
  const imgKura = [
    kura1, 
    kura2, 
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <div className="relative">
        <div className="text-overlay h-52 md:h-96 w-screen">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="overflow-hidden whitespace-wrap text-ellipsis text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of Kalimantan Barat Beaches
            </h1>
        </div>
      </div>

      <div className="flex flex-col w-full items-center px-16">
        <div className="mt-10 mb-10 flex justify-start flex-col lg:flex-row max-w-6xl">
          <div className="lg:mr-5 max-w-96 min-w-80 max-h-60 min-h-8 mb-">
            <CarouselCustomNavigation images={imgBatuNenek} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJJZxuhpzK-jER7S7bsrmkJNI" className="flex whitespace-pre hover:text-blue-900">
                PANTAI BATU NENEK
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg">Pantai yang indah yang terdiri dari bebatuan yang cantik seperti di Surga. Tempat yang sangat cocok untuk berfoto ria. Pantai yang dapat dicapai saat air laut surut karena pantai ini terletak disebuah pulau yang dinamakan juga Pulau Batu Nenek.
              Pantai ini terletak di Desa Temajuk, Kecamatan Paloh, Kabupaten Sambas, Provinsi Kalimantan Barat.Untuk mencapai pantai ini membutuhkan waktu dan tenaga yang cukup besar. Pantai ini berbatasan langsung dengan negara Malaysia. Pantai ini diberi nama “Batu Nenek” karena konon katanya kalau kita berkunjung ke Pantai ini harus mengucapkan, “Permisi, nenek”. Akses untuk menuju ke Pantai ini lumayan terbatas, tidak bisa menggunakan mobil.</p>
          </div>
        </div>

        <div className="mt-10 mb-10 flex justify-start flex-col-reverse lg:flex-row max-w-6xl">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJ86UKssjX2zERdFRY15fYLvM" className="flex whitespace-pre hover:text-blue-900">
                PANTAI PASIR PANJANG
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg">Pantai Pasir Panjang menjadi ikon wisata dari kota Singkawang, Kalimantan Barat. Destinasi ini menjadi favorit wisatawan karena berjarak cukup dekat dari pusat kota. Sajian pemandangan laut dan pesisirnya tersaji indah dan menawan. Pasir Pantai Panjang juga menyediakan berbagai fasilitas dan sarana wisata yang lengkap. Objek wisata ini berada dalam komplek wisata terpadu Taman Pasir Panjang Indah. Kawasan wisata tepi laut ini disebut Pantai Pasir Panjang karena memiliki pesisir yang memanjang. Hamparan pasir putihnya yang cantik membentang hingga sepanjang tiga kilometer.</p>
          </div>
          <div className="lg:ml-5 max-w-96 min-w-80 max-h-60 min-h-8 mb-4">
            <CarouselCustomNavigation images={imgPanjang} />
          </div>
        </div>

        <div className="mt-10 mb-10 flex justify-start flex-col lg:flex-row max-w-6xl">
        <div className="lg:mr-5 max-w-96 min-w-80 max-h-60 min-h-8 mb-4">
            <CarouselCustomNavigation images={imgKura} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mb-2 w-min">
              <Link to="/info/ChIJy0TS2v0K4zERSU_IESXGn6U" className="flex whitespace-pre hover:text-blue-900">
                PANTAI KURA-KURA
                <img src={linkLogo} className="w-10"/>
              </Link>
            </h1>
            <p className="text-lg">Pantai Kura Kura Singkawang terletak di Kota Singkawang, Provinsi Kalimantan Barat. Pantai yang tersembunyi ini menawarkan keindahan alam yang masih alami dan pesona yang memikat hati para pengunjungnya. Dengan pasir putih yang lembut, air laut yang jernih, dan pemandangan yang memukau, pantai ini menjadi tempat yang sempurna untuk bersantai dan menikmati liburan Anda. Salah satu momen yang paling ditunggu-tunggu di Pantai Kura Kura Singkawang adalah saat matahari terbenam. Pemandangan matahari terbenam yang indah dengan warna-warni langit dan pantai yang memukau akan membuat Anda terpesona. Selain itu, Anda juga dapat menikmati berbagai makanan laut segar di warung-warung makan yang terletak di sepanjang pantai.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Pantai;
