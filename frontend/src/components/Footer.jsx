// export default function Footer() {
//   return (
//     <footer className="bg-green-700 text-white p-4 mt-10 text-center rounded-t-xl">
//       <p>© 2025 Organic Fertilizers. All rights reserved.</p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <div className=" bg-black text-white py-10 px-5 ">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Organic Fertilizers</h2>
          <p className="text-sm">
            We provide pure and natural fertilizers that make your plants 
            healthier and your garden happier.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm"> jalgoan , Maharashtra</p>
          <p className="text-sm"> +91 75880 08919 </p>
          <p className="text-sm"> VIMA@organic.com</p>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-5">
        © {new Date().getFullYear()} Organic Fertilizers • All Rights Reserved
      </div>
    </div>
  );
}
