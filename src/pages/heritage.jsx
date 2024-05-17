import React from "react";
import { Link } from "react-router-dom";
import { CarouselCustomNavigation } from "../components/carousel"
import { CarouselBannerCustomNavigation } from "../components/carouselBanner"
import keraton1 from '../assets/heritage/keraton1.jpg'
import keraton2 from '../assets/heritage/keraton2.jpg'
import makam1 from '../assets/heritage/makam1.jpg'
import makam2 from '../assets/heritage/makam2.jpg'
import makam3 from '../assets/heritage/makam3.jpg'
import tugu1 from '../assets/heritage/tugu1.jpg'
import tugu2 from '../assets/heritage/tugu2.jpg'

const Heritage = () => {
  const imgBanner = [
    keraton1,
    makam3,
    tugu2,
  ];
  const imgKeraton = [
    keraton2, 
    keraton1, 
  ];
  const imgMakam = [
    makam1, 
    makam2, 
  ];
  const imgTugu = [
    tugu1, 
    tugu2, 
  ];

  return (
    <div>
      <div className="relative">
        <div className="text-overlay h-52 md:h-96  w-full">
          <CarouselBannerCustomNavigation images={imgBanner}/>
        </div>
        <div className="absolute inset-y-1/2 transform -translate-y-8 w-full z-10">
            <h1 className="text-center select-none font-banner text-white drop-shadow-banner lg:drop-shadow-bannerlg text-4xl lg:text-5xl xl:text-6xl tracking-wider font-semibold">
              Beauty of <span className="whitespace-nowrap">Kalimantan Barat Heritages</span>
            </h1>
        </div>
      </div>

      <div>
        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgKeraton} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJa2AmIklYHS4RfDfcCWMPGTA">
                KERATON KADRIAH
              </Link>
            </h1>
            <p>Keraton Kadariah merupakan objek wisata berupa istana kerajaan yang berada di Pontianak. Destinasi ini menyajikan kemegahan arsitektur istana yang menyimpan jejak-jejak sejarah kesultanan Pontianak. Menjelajah ruangan serta koleksinya, wisatawan dapat menikmati berbagai daya tariknya. Keraton Kadariah merupakan destinasi wisata berupa istana yang sarat nilai sejarah. Lokasinya pun cukup unik di persimpangan tiga sungai besar. Mengunjungi situs penting ini, wisatawan dapat melakukan berbagai aktivitas wisata pilihan. Berusia sekitar tiga abad, Keraton Kadariah menyimpan sejarah perjalanan kota Pontianak hingga kini. Istana ini menjadi salah satu objek wisata sejarah sebagai cikal bakal lahirnya kota Pontianak. Lokasinya tepat di persimpangan sungai, yakni Sungai Landak, Sungai Kapuas Kecil dan Sungai Kapuas.</p>
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJhXfCRajH4jERkFlYRZ_tTrw">
                MAKAM JUANG MANDOR
              </Link>
            </h1>
            <p>Makam Juang Mandor merupakan salah satu situs bersejarah di kecamatan Mandor, Kabupaten Landak, Kalimantan Barat, Indonesia. Makam ini dahulu digunakan sebagai tempat pembantaian ± 21.037 orang oleh tentara Jepang pada tahun 1943 hingga 1944. Peristiwa pembantaian ini kemudian dikenal dengan istilah Tragedi Mandor Berdarah atau Peristiwa Mandor. Makam Juang Mandor berlokasi di Dusun Mandor, Desa Mandor, Kecamatan Mandor, Kabupaten Landak, Kalimantan Barat. Terletak 88 kilometer dari Kota Pontianak dan dapat ditempuh dengan menggunakan kendaraan roda dua maupun roda empat.</p>
          </div>
          <div className="ml-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgMakam} />
          </div>
        </div>

        <div className="mt-10 mx-10 flex justify-start">
          <div className="mr-5 sm:w-full max-w-96 max-h-60 min-h-8">
            <CarouselCustomNavigation images={imgTugu} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-2">
              <Link to="/info/ChIJHdQYf1un4jERKKB-pOCSmZU">
                TUGU KHATULISTIWA
              </Link>
            </h1>
            <p>Tugu Khatulistiwa atau Equator Monument berada di Jalan Khatulistiwa, Pontianak Utara, Provinsi Kalimantan Barat. Lokasinya berada sekitar 3 km dari pusat Kota Pontianak, ke arah Kota Mempawah dan Singkawang. Pada bulan Maret 2005, Tim Badan Pengkajian dan Penerapan Teknologi (BPPT) melakukan koreksi untuk menentukan lokasi titik nol garis khatulistiwa di Kota Pontianak. Koreksi dilakukan dengan menggunakan gabungan metode terestrial dan ekstraterestrial yaitu menggunakan global positioning system (GPS) dan stake-out titik nol garis khatulistiwa dikoreksi. Hasil pengukuran oleh tim BPPT, menunjukkan, posisi tepat Tugu Khatulistiwa saat ini berada pada 0 derajat, 0 menit, 3,809 detik lintang utara; dan, 109 derajat, 19 menit, 19,9 detik bujur timur.</p>
          </div>
        </div>

      </div>
    </div>
  ); 
};

export default Heritage;
