import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Cart({ subTotal, addToCart, removeFromCart, cart }) {
  const router = useRouter();

  const checkout = async () => {
    const requestOptions = {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json", "token":localStorage.getItem("token") },
      body: JSON.stringify({
        address: "kanpur",
        amount: subTotal,
        products: cart,
        status: "pending",
      }),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/orders`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("cart", "");
        toast("Ordered Succesfully");
        router.reload();
      } else {
        console.log("Error occured while ordering");
      }
    } catch (error) {
      console.log("Error occured while ordering");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Navbar props={"Order"} />
      
      <Head>

        <Script src="https://cdn.tailwindcss.com"></Script>
      </Head>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {Object.keys(cart).length==0 ? <tr><td><br /><br /><span style={{display:"flex", justifyContent:"center"}}>No items in the cart......</span></td></tr> : Object.keys(cart).map((elem) => {
                      return (
                        <tr key={cart[elem].url}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={cart[elem].url}
                                alt="Product image"
                              />
                              <span className="font-semibold">
                                {cart[elem].name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">{cart[elem].price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                className="border rounded-md py-2 px-4 mr-2"
                                onClick={() => {
                                  removeFromCart(
                                    cart[elem].name,
                                    1,
                                    cart[elem].price,
                                    cart[elem].name,
                                    cart[elem].ctg
                                  );
                                }}
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {cart[elem].qty}
                              </span>
                              <button
                                className="border rounded-md py-2 px-4 ml-2"
                                onClick={() => {
                                  addToCart(
                                    cart[elem].name,
                                    1,
                                    cart[elem].price,
                                    cart[elem].name,
                                    cart[elem].ctg
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            {cart[elem].price * cart[elem].qty}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Check out Section */}

            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{subTotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{subTotal}</span>
                </div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  onClick={() => {
                    checkout();
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
