import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Head from "next/head";
import React, { useEffect, useState } from "react";



function index({ addToCart, removeFromCart, subTotal, cart }) {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [token, settoken] = useState("");

  useEffect(() => {
    fetchData();
    settoken(localStorage.getItem("token"));
  }, []);

  return (
    <>
  
      {token ? <Navbar props={"Order"} /> : <Navbar props={"Login"} />}

      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <HomePage />
      <div class="flex flex-col text-center w-full mb-20">
      {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Products</h1>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">we are dedicated to providing high-quality products & services, that cater to your [specific needs/desires]. Our mission is to enhance your [lifestyle/experience] by offering a curated selection of products that combine functionality, style, and affordability.</p> */}
    </div>
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {data
          ? data.msg.map((e) => {
              return (
                <Product
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  url={e.poster.url}
                  name={e.title}
                  ctg={e.category}
                  price={e.price}
                />
              );
            })
          : ""}
      </section>
    </>
  );
}

export default index;
