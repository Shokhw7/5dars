import { useReducer, createContext, useEffect } from "react";

export const GlobalContext = createContext();

const globalStateFromLocal = () => {
  return localStorage.getItem("globalState")
    ? JSON.parse(localStorage.getItem("globalState"))
    : {
        user: true,
        products: [],
        likedProducts: [],
        totalAmount: 0,
        totalPrice: 0,
      };
};

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };
    case "INCREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };

    case "DECREASE_AMOUNT":
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === payload
              ? { ...product, amount: product.amount - 1 }
              : product
          )
          .filter((product) => product.amount > 0),
      };
    case "CHANGE_AMOUNT_PRICE":
      return {
        ...state,
        totalAmount: payload.amount,
        totalPrice: payload.price,
      };
    case "DELETE":
      //
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case "ADD_LIKED":
      const alreadyLiked = state.likedProducts.some((p) => p.id === payload.id);
      if (alreadyLiked) return state;
      return {
        ...state,
        likedProducts: [...state.likedProducts, payload],
      };
    case "REMOVE_LIKED":
      return {
        ...state,
        likedProducts: state.likedProducts.filter((p) => {
          return p.id != payload;
        }),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, globalStateFromLocal());
  useEffect(() => {
    let price = 0;
    let amount = 0;

    state.products.forEach((product) => {
      price += product.amount * product.price;
      amount += product.amount;
    });

    dispatch({ type: "CHANGE_AMOUNT_PRICE", payload: { price, amount } });
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(state));
  }, [state]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
