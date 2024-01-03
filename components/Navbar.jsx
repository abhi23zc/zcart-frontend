import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";

import React, { useEffect, useState } from "react";

function Navbar(props) {
  props = props.props;
  const [isClient, setIsClient] = useState(false);
  const [token, settoken] = useState("");
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    settoken(token);

    setIsClient(true);
  }, []);

  return { isClient } ? (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="logo.png" alt=""  style={{width:"110px"}}  srcset="" />
           
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/">
              {" "}
              Home{" "}
            </Link>

            <a className="mr-5 hover:text-gray-900">Menu</a>
            <a className="mr-5 hover:text-gray-900">Services</a>

            <Link
              className="mr-5 hover:text-gray-900"
              href={`/${props.toLowerCase()}`}
            >
              {props}{" "}
            </Link>
            {
              token ? 
            <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={(e)=>{
              console.log("logged out")
              // e.preventDefault();
              localStorage.setItem("token", "");
              router.push("/login")
              // router.reload()
            }}
            >
              {" "}
              Logout{" "}
            </a> : ""
            }
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <Link href="/cart">Cart</Link>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      
      <Script src="https://cdn.tailwindcss.com"></Script>
    </>
  ) : (
    ""
  );
}

export default Navbar;
