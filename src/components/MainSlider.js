import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
//les requis de react pour les paginations et navigation
import { Pagination } from "swiper";

import camera from "../img/camera.png";
import logo from "../img/logo.png";
import Calque1 from "../img/Calque 10.png";
import Calque2 from "../img/Calque 3.png";


const slideData = [
  {
    img: Calque1,
    pretitle: "Ets KALACH IMPORT",
    titlePart1: "Partenaire exclusif de JCT",
    titlePart2: "Qualité Allemande",
    titlePart3: "Nous sommes professionels",
    btnText: "",
  },
  {
    img: Calque2,
    pretitle: "Ets KALACH IMPORT",
    titlePart1: "Vente de machines à bois et accessoires",
    titlePart2: "Sell all wood machines and it parts",
    titlePart3: "",
    btnText: "",
  },
  {
    img: camera,
    pretitle: "Pourquoi perdre",
    titlePart1: "une journée faute de matériels ??",
    titlePart2: "passe ta commande tout simplement",
    titlePart3: "nous sommes déja là !!",
    btnText: "Ajouter au panier",
  },
  {
    img: logo,
    pretitle: "On a plus peur des prix ",
    titlePart1: "dans le réseau du débrouillard",
    titlePart2: "les prix ",
    titlePart3: "sont les miettes !!",
    btnText: "Ajouter au panier",
  },
];

const MainSlider = () => {
  //console.log(data);
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {
          slideData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                  {/*text */}
                  <div className="w-full lg:-flex-1">
                    <div className="uppercase mb-1 text-center lg:text-left">{slide.pretitle}</div>
                    <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20 ">
                      {slide.titlePart1} <br />
                      {slide.titlePart2} <br />
                      {slide.titlePart3}
                    </div>
                  </div>
                  {/*img */}
                  <div className="flex-1">
                    <img className="xl:absolute xl:-right-16 xl:-bottom-12" src={slide.img} alt='' />
                  </div>
                 
                 
                </div>
                </SwiperSlide>
            );
          })
          
        }
        
      </>
    </Swiper>
  );
};

export default MainSlider;
