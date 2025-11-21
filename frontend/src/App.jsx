// import Home from "./pages/Home"

// export default function App() {
//   return (
//     <div className="bg-red-500 text-white text-4xl p-6">
//       <Home />
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/product";
import AddProduct from "./pages/AddProduct"
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/products/add" element={<AddProduct />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/About" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      {/* <FoodOption></FoodOption>
       <GroceryOption></GroceryOption> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
