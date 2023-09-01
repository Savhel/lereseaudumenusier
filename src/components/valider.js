import {
  IoArrowBack,
  IoArrowForward,
  IoCartOutline,
  IoClose,
} from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import * as api from "../api";
import axios from "axios";
import { request } from "../request";

const Modal = ({ visible, open }) => {

 


  if (!visible) return null;

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center  ">
      <div className="bg-white p-2 rounded w-[60%] mx-auto xs:w-[90%] overflow-y-auto h-[50%]">
        <div
          onClick={open}
          className="bg-black rounded-[32px] right-5 cursor-pointer text-4xl w-[30px] flex justify-end text-accent"
        >
          <IoClose />
        </div>
        <div className="py-1 px-4 justify-center items-center w-full text-black">
          <h2 className="text-2xl text-accent text-center  font-bold">
            Informations Personnelles
          </h2>
          <p className="mt-2  text-lg text-center  text-gray-600 xs:text-[15px]">
            Vos Informations seront utilisées uniquement pour la livraison.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
