import { useGlobalContext } from "../hooks/useGlobalContext";
import ProductList from "../components/ProductList";

function Favorites() {
  const { likedProducts } = useGlobalContext();

  if (likedProducts.length === 0) {
    return <h2 className="text-center text-2xl mt-10">Izbranniylar yo‘q</h2>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center my-6">Izbranniy Mahsulotlar</h2>
      <ProductList products={likedProducts} />
    </section>
  );
}

export default Favorites;
