import React from "react";
import { Link } from "react-router-dom";

function Product({ prod }) {
  return (
    <Link
      to={`/singleProduct/${prod.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4"
    >
      <img
        src={prod.thumbnail}
        alt={prod.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{prod.title}</h3>
      <p className="text-lg text-green-600 font-bold">${prod.price}</p>
    </Link>
  );
}

export default Product;
