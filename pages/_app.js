import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));

        let mycart = JSON.parse(localStorage.getItem("cart"));
        let subt = 0;
        let keys = Object.keys(mycart);
        for (let i = 0; i < keys.length; i++) {
          subt += mycart[keys[i]].qty * mycart[keys[i]].price;
        }
        setsubTotal(subt);
      }
    } catch (e) {
      console.error("Error");
      localStorage.clear();
    }
  }, [subTotal]);

  const addToCart = (itemId, qty, price, name, ctg, url) => {
    let mycart = cart;
    if (itemId in mycart) {
      mycart[itemId].qty += 1;
    } else {
      mycart[itemId] = { qty: 1, price, name, ctg ,url};
    }
    setcart(mycart);
    saveCart(mycart);
  };
  const removeFromCart = (itemId, qty, price, name, ctg) => {
    let mycart = cart;

    if (itemId in mycart) {
      mycart[itemId].qty -= 1;
    }
    if (mycart[itemId].qty <= 0) delete mycart[itemId];
    setcart(mycart);
    saveCart(mycart);
  };

  const clearCart = () => {
    setcart({});
    saveCart({});
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let subt = 0;
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subt += cart[keys[i]].qty * cart[keys[i]].price;
    }
    setsubTotal(subt);
    // Array.from(cart).forEach((elem)=>{
    // console.log(elem)
    // console.log(elem.price, '*', elem.qty )
    // })
  };

  return (
    <>
     
     <div><Toaster/></div>
      <Component
      subTotal={subTotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
    </>
  );
}
