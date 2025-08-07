import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Product({ prod }) {
  const { dispatch, products, likedProducts } = useGlobalContext();

  const [alreadyLiked, setAlreadyLiked] = useState(false)

  const addLiked = (e) => {
    e.preventDefault()
    dispatch({type: "ADD_LIKED", payload: prod})
    setAlreadyLiked(true)
  }

  const removeLiked = (e) => {
    e.preventDefault()
    setAlreadyLiked(false)
    dispatch({type: "REMOVE_LIKED", payload: prod.id})
  }

  useEffect(() => {
    const item = likedProducts.find((p) => p.id == prod.id)
    if (item) setAlreadyLiked(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = products.find((product) => product.id == prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
  };

  return (
    <Link
      to={`/singleProduct/${prod.id}`}
      className="blockdecoration-black rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4"
    >
      <img
        src={prod.thumbnail}
        alt={prod.title}
        className="m-auto h-48 object-cover rounded-lg mb-0 mt-0 "
      />
      <h3 className="text-xl font-semibold mb-2 decoration-black flex justify-between">
        {prod.title}
        {alreadyLiked && (
          <button onClick={removeLiked} className="cursor-pointer text-2xl"><FaHeart /></button>
        )}
        {!alreadyLiked && (
          <button onClickCapture={removeLiked} onClick={addLiked} className="cursor-pointer text-2xl"><FaRegHeart /></button>
        )}
      </h3>
      <p className="text-lg text-green-600 font-bold">${prod.price}</p>

      <div className=" pt-3">
        <button
          onClick={handleSubmit}
          className="btn btn-secondary ml-auto w-full h-[37px]"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default Product;
