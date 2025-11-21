import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-[#47403d] font-serif sticky top-0 z-50">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12"
          src="//organicbazar.net/cdn/shop/files/Organicbazar_low.png?v=1711515765"
          alt="logo"
        />

        <div className="text-white text-base font-bold flex gap-15 items-center">
          <a href="/" className="hover:text-green-200">
            Home
          </a>
          <a href="/products" className="hover:text-green-200">
            Products
          </a>
          <a href="/contact" className="hover:text-green-200">
            Contact
          </a>
          <a href="/cart" className="hover:text-green-200">
            Cart
          </a>
          <a href="/about" className="hover:text-green-200">
            About
          </a>

          {!isLoggedIn ? (
            <>
              <a href="/login" className="hover:text-green-200">
                Login
              </a>
              <a href="/signup" className="hover:text-green-200">
                Signup
              </a>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:text-green-200">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
