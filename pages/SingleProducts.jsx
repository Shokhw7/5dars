import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/product/" + id)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, [id]);

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
