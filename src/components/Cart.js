import React, { useContext, useState } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Modal from "./Modal";
 
const Cart = () => {
  
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const [isLoad, setIsLoad] = useState(false);

  const handleOnclose = () =>  setIsLoad(false)
  

  
  return (
    <div className="w-full h-ful px-4 text-white">
      <div className="overflow-y-auto h-[70vh]">
        <div
          onClick={() => setIsOpen(false)}
          className=" cursor-pointer text-4xl w-20 h-[98px] flex justify-start items-center text-accent "
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/*sous total et total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/*Total*/}
          <div className="flex justify-between text-2xl">
            <div>Totals : </div>
            <div>{total} Fcfa</div>
          </div>
        </div>
      )}
      {/*boutons */}
      <div className="px-6 ">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
                <button onClick={() => { clearCart()}} className="btn btn-accent hover:bg-accent-hover text-primary text-sm">Vider le panier</button>
            <button
              onClick={() => { setIsLoad(true) }}
              className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
                          Commander
              <IoArrowForward className="text-lg" />
              
             
              
                </button>
          </div>
              ) : (
                <div className="h-full asolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
                          <div className="text-2xl">Your cart is empty</div>
                          <div className="text-6xl">
                              <IoCartOutline />
                          </div>
                </div>
          
        )}
      </div>
      <Modal onClose={handleOnclose} visible = {isLoad} total = { total} /> 
    </div>
  );
};

export default Cart;
