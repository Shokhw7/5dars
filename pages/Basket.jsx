import React from "react";
import { useGlobalContext } from "../src/hooks/useGlobalContext";

function Basket() {
  const { products, totalAmount, totalPrice } = useGlobalContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Basket</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">Your basket is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {products.map((prod) => (
              <li
                key={prod.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex justify-between w-[1000px]">
                    <h3 className="font-semibold">{prod.title}</h3>
                    <p className="text-gray-500">${prod.price}</p>
                  </div>
                </div>
                <p className="font-bold">x{prod.amount}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-lg">
              Total price: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
