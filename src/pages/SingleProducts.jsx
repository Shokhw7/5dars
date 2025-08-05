import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProducts() {
  const { id } = useParams();
  // const [product, setProduct] = useState(null);
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/product/" + id);
  if (isPending) {
    return (
      <>
        <h1 className="loading loading-dots loading-xl mt-72"></h1>
      </>
    );
  }

  if (error) {
    return (
      <h2>
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </h2>
    );
  }

  return (
    <section className="p-8 max-w-4xl mx-auto">
      {product && (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-xl"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <p className="text-gray-700 mt-4">{product.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SingleProducts;
