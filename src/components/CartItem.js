import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import Qty from '../components/Qty';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const {removeFromCart} = useContext(CartContext);
  return (
    <div className="flex gap-x-8 bg-white text-black rounded-md">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`${item.image}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 ">
          <Link to={`/product/${item.id}`}>{item.titre}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all justify-end text-red-500"
          >
            <IoClose />
          </div>
        </div>
        <div className=" flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />

            <div className="text-accent text-xl">
              {item.prix * item.amount} Fcfa
            </div>
          </div>
        </div>
        <div>
          <span className="text-accent">
            à {item.prix} Fcfa l'unité
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
