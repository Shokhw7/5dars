import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  // const [products, setProducts] = useState(null);
  // useEffect(() => {
  //   axios("https://dummyjson.com/products")
  //     .then(({ data }) => setProducts(data.products))
  //     .catch((error) => console.log(error.message));
  // }, []);
  // return <section>{products && <ProductList products={products} />}</section>;
  const {
    data: products, isPending, error
  } = useFetch("https://dummyjson.com/products")

  if (isPending){
    return (
      <>
      <h1 className="loading loading-dots loading-xl mt-72"></h1>
      </>
    )
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

  return <section>{products && <ProductList products={products.products} />}</section>
}

export default Home;
