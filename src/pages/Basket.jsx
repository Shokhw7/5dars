import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function Basket() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  const increment = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  const decrement = (id, amount) => {
    if (Number(amount) === 1) {
      dispatch({ type: "DELETE", payload: id });
    } else {
      dispatch({ type: "DECREASE_AMOUNT", payload: id });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Your Basket</h1>

      {products.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your basket is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {products.map((prod) => (
              <li
                key={prod.id}
                className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <Link
                      to={`/SingleProduct/${prod.id}`}
                      className="font-semibold hover:underline dark:text-white"
                    >
                      {prod.title}
                    </Link>
                    <span className="text-gray-500 dark:text-gray-300">
                      Price: {formatPrice(prod.price)}
                    </span>
                    <span className="text-gray-700 font-medium dark:text-gray-200">
                      Total: {formatPrice(prod.price * prod.amount)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(prod.id, prod.amount)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                  >
                    -
                  </button>
                  <span className="font-bold dark:text-white">
                    {prod.amount}
                  </span>
                  <button
                    onClick={() => increment(prod.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-lg dark:text-white">
              Total price: <strong>{formatPrice(totalPrice)}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
