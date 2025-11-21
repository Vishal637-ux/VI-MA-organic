import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productsData } from "../utils/productData";
import { Link } from "react-router-dom";

export default function Products() {
  // STEP 1: Read search keyword from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search")?.toLowerCase() || "";

  // STEP 2: Filter products based on search term
  const filteredProducts = search
    ? productsData.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.description?.toLowerCase().includes(search)
      )
    : productsData;

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        {search ? `Search results for "${search}"` : "Our Products"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-wrap">
          {filteredProducts.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id}>
              <ProductCard
                id={p.id}
                title={p.title}
                image={p.image}
                price={p.price}
                compareAtPrice={p.compareAtPrice}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
