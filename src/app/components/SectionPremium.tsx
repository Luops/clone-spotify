// React / Next
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Images
import Background from "../assets/capa.png";

// Icons
import { Music } from "lucide-react";

type Props = {};

function SectionPremium({}: Props) {
  // Options do Slider
  const sliderOptions = [
    {
      id: "1",
      name: "Register",
      textH3: "Música para todos",
      linkOne: "Obter o spotify premium",
      linkTwo: "Aproveite o spotify free",
      icon: "",
    },
    {
      id: "2",
      name: "Radio",
      textH3: "As melhores rádios",
      linkOne: "Ouça agora",
      icon: <Music />,
    },
  ];
  return (
    <section
      id="Premium"
      className="w-full h-[100vh] relative flex items-center justify-center bg-gradient-to-r from-fuchsia-400 to-purple-400"
    >
      {/* Background */}
      <Image
        src={Background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-40"
      />
      {/* Slider */}
      <div className="w-full flex items-center justify-center">
        <>
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="w-[800px] flex items-center justify-center mySwiper"
          >
            {sliderOptions.map((option: any) => (
              <SwiperSlide
                key={option}
                className="w-[600px] flex flex-col text-center items-center justify-center"
              >
                <h3 className="text-7xl text-white font-roboto font-extrabold">
                  {option.textH3}
                </h3>
                <div className="w-full flex items-center justify-center gap-10 mt-10 uppercase text-white font-semibold text-sm">
                  <Link
                    href={`/${option.name}`}
                    target="_blank"
                    className={`${
                      option.linkTwo ? "" : "hidden"
                    } flex items-center justify-end rounded-full bg-gradient-to-r from-violet-600 to-violet-700 shadow-2xl py-2 px-4 hover:text-white/80 transition-all ease-in-out duration-300`}
                  >
                    <i className={`${option.icon ? "" : "hidden"}`}>
                      {option.icon}
                    </i>
                    {option.linkTwo}
                  </Link>
                  <Link
                    href={`/${option.name}`}
                    target="_blank"
                    className={`${
                      option.linkOne ? "" : "hidden"
                    } flex items-center justify-start rounded-full border shadow-2xl py-2 px-4 hover:text-white/80 transition-all ease-in-out duration-300`}
                  >
                    <i className={`${option.icon ? "mr-1" : "hidden"}`}>
                      {option.icon}
                    </i>
                    {option.linkOne}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
}

export default SectionPremium;
