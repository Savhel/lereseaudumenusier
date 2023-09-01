import React, { useContext } from "react";
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";
import { CartContext } from "../context/CartContext";
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  const { menu, setMenu } = useContext(CartContext);
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/*slidebar */}
          <div>
            <CategoryNav />
          </div>
          {/*main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/*promo image */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] ">
            {/*promo image  1*/}
            <div className="grad h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4 ">
                  La marque des travailleurs
                </div>
                <a
                  href="#"
                  onClick={() => setMenu(true)}
                  className="uppercase text-accent"
                >
                  Allons-y
                </a>
              </div>
              {/* img */}
              <img
                className="absolute z-20 -top-2 -right-4"
                src={PromoImg1}
                alt=""
              />
            </div>
            {/*promo image  2*/}
            <div className="grad h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4 ">
                  La confiance notre seul slogant
                </div>
                <a
                  href="#"
                  onClick={() => setMenu(true)}
                  className="uppercase text-accent"
                >
                  Allons-y
                </a>
              </div>
              {/* img */}
              <img
                className="absolute z-20 top-4 -right-4"
                src={PromoImg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
