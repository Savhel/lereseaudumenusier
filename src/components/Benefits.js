import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Benefits = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  //console.log(item);
  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img src={`${item.image}`} alt="" />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 text-lg ">
          <Link to={`/product/${item.id}`}>{item.titre}</Link>
         
        </div>
        <div className=" flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            

            <div className="text-accent text-xl">
             <span className="text-white">{item.prix} * {item.amount}</span> = {item.prix * item.amount} Fcfa
            </div>
          </div>
        </div>
        <div>
          <span className="text-accent">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

