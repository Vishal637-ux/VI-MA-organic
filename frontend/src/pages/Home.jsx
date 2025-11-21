import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeedCategoryOption from "../components/SeedCategoryOption";

export default function Home() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  // 🔥 Search function (only for 2nd input)
  const handleSearch = () => {
    if (!searchText.trim()) return;

    // Example: navigate to products page with search query
    navigate(`/products?search=${searchText}`);

    // OR show result later
    console.log("Searching for:", searchText);
  };

  // 🔥 Auto redirect (your original code)
  useEffect(() => {
    const alreadyRedirected = localStorage.getItem("redirectedOnce");
    if (!alreadyRedirected) {
      const timer = setTimeout(() => {
        localStorage.setItem("redirectedOnce", "true");
        navigate("/login");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div>
      <div className="pt-16 pb-8 relative bg-black">
        <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
          Pure Organic Fertilizers for Healthier Harvests
        </div>

        {/* 🔥 Search Inputs */}
        <div className="container mx-auto mt-10 flex justify-center">
          {/* First input - location (NO function) */}
          {/* <input
            className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Jalgoan, India"
          /> */}

          {/* Second input - SEARCH BAR (Working) */}
          <input
            className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Search for fertilizer and products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          {/* Optional: Search Button */}
          {/* 
          <button 
            onClick={handleSearch} 
            className="bg-green-600 text-white px-6 py-2 rounded-xl"
          >
            Search
          </button> 
          */}
        </div>
      </div>

      <div className="p-6">
        <section>
          <div className="mt-20 w-[90%] container mx-auto relative">
            <img
              src="//nativeindianorganics.com/cdn/shop/files/Why-process-organic-fertilizer.jpg?v=1750748177&width=2000"
              alt="product"
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-5xl font-bold drop-shadow-lg">
                ORGANIC FERTILIZER
              </h1>
              <p className="text-white text-lg mt-4 drop-shadow-lg">
                Naturally enrich your soil with our organic fertilizers. Safe,
                chemical-free options for strong, healthy plant growth.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SeedCategoryOption />
    </div>
  );
}
