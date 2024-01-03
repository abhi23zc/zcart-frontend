import React from "react";
import toast from "react-hot-toast";

function Product({ addToCart, removeFromCart, name, ctg, price, url }) {
  return (
    <>
      <div className="w-60 bg-white  shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
        <img src={url} alt="Product" className="h-60 w-72 object-scale-down " />
        <div className="px-4 py-3 w-60">
          {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">{price}</p>
            </del>
            <div className="ml-auto">
              <svg
                width="20"
                height="20"
                onClick={() => {
                  addToCart(name, 1, price, name, ctg, url);
                 toast("Added to Cart")
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
