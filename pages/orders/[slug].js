// pages/[slug].js
import Navbar from "@/components/Navbar";
import axios from "axios";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";

const SlugPage = () => {
    
  
  const [subTotal, setsubTotal] = useState()
  const [cart, setcart] = useState()
  const router = useRouter();
  const { slug } = router.query;

  const submit = async (slug) => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/orders/${slug}`, {
        withCredentials: true,
        headers:{
          "token":localStorage.getItem("token")
        }
      })
      .then((response) => setcart(response.data.msg));
  };

  // submit()
  useEffect(() => {
    if(!slug) return;
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    submit(slug);
  }, [slug])

   


  
  if(!cart) return;

return (
    <>
    <Navbar props={"Order"}/>
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
                    {
                    
                      Object.keys(cart['products']).map((elem) => {
                        // let elem = (cart['products'][elem])
                      return (
                        <tr key={cart['products'][elem].url}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={cart['products'][elem].url}
                                alt="Product image"
                              />
                              <span className="font-semibold">
                                {cart['products'][elem].name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">{cart['products'][elem].price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                     
                              <span className="text-center w-8">
                                {cart['products'][elem].qty}
                              </span>
                        
                            </div>
                          </td>
                          <td className="py-4">{cart['products'][elem].price * cart['products'][elem].qty}</td>
                        </tr>
                      );
                    })
                    }
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
                  <span>{cart.amount}</span>
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
                  <span className="font-semibold">{cart.amount}</span>
                </div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  
                >
                  {(cart.status).toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SlugPage;
