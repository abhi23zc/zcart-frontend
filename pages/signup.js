import Navbar from "@/components/Navbar";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Signup() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    // console.log(email, password, process.env.NEXT_PUBLIC_BASE_URL);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register/`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        toast("Successfully registered")
        router.push("/");
      } else {
        // console.log("Error occured while registering");
        toast("Please Check Your Credentials")
      }
    } catch (error) {
      toast("Please Check Your Credentials")
      // console.log("Error occured while registering");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Navbar props={"LogIn"} />
      
      <Script src="https://cdn.tailwindcss.com"></Script>

      <div class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div class="w-full">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-900">Sign up</h1>
            <p class="mt-2 text-gray-500">
              Sign Up below to access your account
            </p>
          </div>
          <div class="mt-5">
            <form action="">
              <div class="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Name
                </label>
              </div>
              <div class="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Email Address"
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div class="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Password"
                  class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  for="password"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div class="my-6">
                <button
                  type="submit"
                  onClick={(e) => {
                    submit(e);
                  }}
                  class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
              <p class="text-center text-sm text-gray-500">
                Already have an account ?
                <Link
                  href={"/login"}
                  class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Log In
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
