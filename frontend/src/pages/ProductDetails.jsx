import { useParams } from "react-router-dom";
import { productsData } from "../utils/productData";
import { addToCart } from "../utils/cart";

export default function ProductDetails() {
  const { id } = useParams(); // get  product id from URL
  const product = productsData.find((item) => item.id == id);

  if (!product) {
    return <h2 className="p-6">Product not found</h2>;
  }

  return (
    <div className="px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-green-700 text-2xl font-bold">₹{product.price}</p>

          {product.compareAtPrice && (
            <p className="line-through text-gray-500">
              ₹{product.compareAtPrice}
            </p>
          )}

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description ||
              "This product is very useful for your garden."}
          </p>

          <button
            onClick={() => {
              addToCart({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
              });
              alert("Added to cart!");
            }}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
