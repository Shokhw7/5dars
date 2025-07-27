import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.log(error.message));
  }, []);
  return <section>{products && <ProductList products={products} />}</section>;
}

export default Home;
