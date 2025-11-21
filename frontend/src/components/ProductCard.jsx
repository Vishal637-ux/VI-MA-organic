import React from "react";
import { addToCart } from "../utils/cart";

const ProductCard = ({ id, title, image, price, compareAtPrice }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer border">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      <div className="flex items-center gap-2 mt-2">
        <p className="text-green-600 font-bold text-xl">₹{price}</p>

        {compareAtPrice && (
          <p className="text-gray-500 line-through text-sm">
            ₹{compareAtPrice}
          </p>
        )}
      </div>

      <button
        onClick={() =>
          addToCart({
            id: id,
            title: title,
            image: image,
            price: price,
          })
        }
        className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
