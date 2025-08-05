import { Link } from "react-router-dom";
import { useGlobalContext } from "../src/hooks/useGlobalContext";

import { formatPrice } from "../src/utils";

function BasketItem({ product }) {
  const { dispatch } = useGlobalContext();
  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: product.id,
    });
  };
  const decrement = (e) => {
    e.preventDefault();
    let req = confirm(`Rostan ham ushbu malumotni ochirmoqchimisiz?`)
      if(!req) return
      if (product.amount == 1) {
        dispatch({
          type: "DELETE",
          payload: product.id,
        });
        //toastify
    } else {
      dispatch({
        type: "DECREASE_AMOUNT",
        payload: product.id,
      });
    }
  };
}
return(
    <Link to={`/SingleProduct/${product.id}`}>
        <h3>{product.title}</h3>
        <div>
            <span>TotalPrice: {formatPrice(product.amount * product.price)}</span>
            <button onClick={increment}>+</button>
            <span>{product.amount}</span>
            <button onClick={decrement}>-</button>
        </div>
    </Link>
)