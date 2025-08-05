import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ prod }) {
  const { dispatch, products } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = products.find((product) => product.id == prod.id)

    if(item){
      dispatch({type:"INCREASE_AMOUNT", payload: prod.id})
    }else
      dispatch({ type: "ADD_PRODUCT", payload: {...prod, amount: 1} });
  };

  return (
    <Link
      to={`/singleProduct/${prod.id}`} className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4">
      <img
        src={prod.thumbnail}
        alt={prod.title}
        className="m-auto h-48 object-cover rounded-lg mb-0 mt-0 "
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">{prod.title}</h3>
      <p className="text-lg text-green-600 font-bold">${prod.price}</p>
      <div className=" pt-3"><button onClick={handleSubmit} className="btn btn-secondary ml-auto w-full h-[37px]">Add to cart</button></div>
    </Link>
  );
}

export default Product;
