import React, { Children, createContext, useEffect, useState } from 'react';
import { unstable_usePrompt } from 'react-router-dom';

export const CartContext = createContext();
 
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartT, setCartT] = useState(0);
  const [menu, setMenu] = useState(false);

  //montant
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    },0);

    setItemsAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return (a + c.prix * c.amount);
    }, 0);
    setTotal(total);
  }, [cart]);

  const addToCart = ( item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 }
    //console.log(newItem);
    setCart([...cart, newItem]);
    //verifie si l'element est déja dans le panier

    const cartItem = cart.find(item => {
      return item.id === itemID;
    })
    
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1)
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setAmount([...cart, newItem])
    }
    setIsOpen(true);
  }

  const removeFromCart = (id) => {
    //console.log(`l'element ${id} est enlevé`);
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 }
          } else {
            setAmount(value);
            return { ...item, amount: value }
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true)
  };

  const hanldeSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find(item => {
      return item.id === id
    });
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value }
        } else {
          return item;
        }
      });

      setCart(newCart);
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        hanldeSelect,
        total,
        clearCart,
        cartT,
        setCartT,
        menu,
        setMenu,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
