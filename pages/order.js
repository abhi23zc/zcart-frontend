import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";
import Navbar from "@/components/Navbar";
function Order() {
  //     try {
  //       const response = await fetch("http://localhost/orders", {
  //         method:'get',
  //           credentials: 'localhost',

  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data)
  //         alert("Success");
  //       } else {
  //         console.log("Error occured ");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const router = useRouter();
  const [data, setdata] = useState("");
  const submit = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/orders`,
      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
    setdata(response.data);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    submit();
  }, []);

  return (
    <>
      <Navbar props={"Order"} />
      <div className="container mx-auto px-20">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Order Id
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Order Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data ? (
                      data.msg.map((e, index) => {
                        console.log(e);
                        return (
                          <>
                            <tr key={e._id}
                              onClick={() => {
                                router.push(`/orders/${e._id}`);
                              }}
                              class="border-b transition duration-300 ease-in-out cursor-pointer hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200"
                            >
                              <td class="whitespace-nowrap px-6 py-4 font-medium">
                                {index + 1}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {e._id}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {e.status}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {e.createdAt}
                              </td>
                            </tr>
                          </>
                        );
                      })
                    ) : (
                      <tr>
                        <td>No orders found....</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
