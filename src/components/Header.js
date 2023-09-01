import React, { useContext, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../img/logo.png";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount ,menu, setMenu } = useContext(CartContext);
  //const [menu, setMenu] = useState(false);

  const phoneNumber = "237675962608";
  const message =  "Bonsoir Mr Narcisse, s'il vous plait je suis un client du réseau du menusier en ligne j'ailerais m'entrenir avec vous si possible !";

  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;
  

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div
            onClick={() => setMenu(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/*categorie pour les mobiles */}
          <div
            className={`${
              menu ? "left-0" : "-left-full sm:-right-[50%] md:-right-[50%]"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setMenu={setMenu} />
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="hidden  w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden xl:flex uppercase">
              Besoin d'aide ? +237 675-962-608
            </div>
            {/* cart */}
            <div
              onClick={() => setIsOpen(!isOpen)} //change isOpen en son contraire
              className="relative cursor-pointer"
            >
              <a
                href={whatsappURL}
                className="hover:text-white transition-all text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div
              onClick={() => setIsOpen(!isOpen)} //change isOpen en son contraire
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl " />
              {/* Prix total */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            <div
              className={`
                ${isOpen ? "right-0" : "-right-full"}
                bg-[#0e0F10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
      </div>
      {/* formulaire de recherche sur mobile */}

      <div className=" container mx-auto    justify-center items-center xl:hidden  w-full lg:flex ">
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
