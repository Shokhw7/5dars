import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((prod) => {
        return (
          <Product classname="grid grid-cols-3 " key={prod.id} prod={prod} />
        );
      })}
    </div>
  );
}

export default ProductList;
