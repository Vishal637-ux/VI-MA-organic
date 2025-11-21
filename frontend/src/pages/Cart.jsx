// import { getCart, saveCart } from "../utils/cart";
// import { useState } from "react";

// export default function Cart() {
//   const [cart, setCart] = useState(() => getCart());

//   const removeItem = (id) => {
//     const updated = cart.filter((item) => item.id !== id);
//     saveCart(updated);
//     setCart(updated);
//   };

//   // 👉 Calculate Total Price
//   const totalAmount = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="px-6 py-10">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {cart.length === 0 && <p>No items in cart.</p>}

//       <div className="flex items-center gap-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center border p-4 rounded gap-4"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-16 h-16 rounded object-cover"
//             />
//             <div>
//               <h2 className="font-bold">{item.title}</h2>
//               <p>₹{item.price}</p>
//               <p>Qty: {item.quantity}</p>
//             </div>

//             <button
//               onClick={() => removeItem(item.id)}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//       {/*  Payment Section */}
//       {cart.length > 0 && (
//         <div className="border-t pt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Total:</h2>
//             <p className="text-xl font-bold text-green-700">₹{totalAmount}</p>
//           </div>

//           <button
//             onClick={() => alert("Payment feature coming soon!")}
//              className="w-[80%] max-w-[50%] mx-auto bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 block"
// >
          
//             Proceed to Payment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



//  this is my code 


import { getCart, saveCart } from "../utils/cart";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(() => getCart());
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: "",
    pin: ""
  });

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    saveCart(updated);
    setCart(updated);
  };

  // 👉 Calculate Total Price
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceedToPayment = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentForm(true);
    // Pre-fill the amount with cart total
    setPaymentData({
      amount: totalAmount.toString(),
      pin: ""
    });
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!paymentData.amount || !paymentData.pin) {
      alert("Please fill in all fields");
      return;
    }

    if (paymentData.pin.length !== 4) {
      alert("PIN must be 4 digits");
      return;
    }

    // Create payment record
    const paymentRecord = {
      id: Date.now(),
      method: selectedPaymentMethod,
      amount: parseFloat(paymentData.amount),
      pin: paymentData.pin, // Note: In real app, never store PIN in plain text
      date: new Date().toISOString(),
      cartItems: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price
      }))
    };

    // Save to localStorage
    savePaymentToLocalStorage(paymentRecord);
    
    // Clear cart after successful payment
    saveCart([]);
    setCart([]);
    
    // Reset all states
    setShowPaymentForm(false);
    setShowPaymentOptions(false);
    setSelectedPaymentMethod("");
    setPaymentData({ amount: "", pin: "" });

    alert(`Payment successful! ₹${paymentData.amount} paid via ${selectedPaymentMethod}`);
  };

  const savePaymentToLocalStorage = (paymentRecord) => {
    // Get existing payments or initialize empty array
    const existingPayments = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
    
    // Add new payment
    const updatedPayments = [...existingPayments, paymentRecord];
    
    // Save back to localStorage
    localStorage.setItem('paymentHistory', JSON.stringify(updatedPayments));
  };

  const handleBackToMethods = () => {
    setShowPaymentForm(false);
    setSelectedPaymentMethod("");
    setPaymentData({ amount: "", pin: "" });
  };

  const handleBackToCart = () => {
    setShowPaymentOptions(false);
    setShowPaymentForm(false);
    setSelectedPaymentMethod("");
    setPaymentData({ amount: "", pin: "" });
  };

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>No items in cart.</p>}

      <div className="flex items-center gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded gap-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>₹{item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      {/* Payment Section */}
      {cart.length > 0 && (
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold text-green-700">₹{totalAmount}</p>
          </div>

          {!showPaymentOptions ? (
            // Initial Payment Button
            <button
              onClick={handleProceedToPayment}
              className="w-[80%] max-w-[50%] mx-auto bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 block"
            >
              Proceed to Payment
            </button>
          ) : !showPaymentForm ? (
            // Payment Methods Section
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-center mb-4">Choose Payment Method</h3>
              
              <button
                onClick={() => handlePaymentMethodSelect("Credit Card")}
                className="w-[30%] max-w-[50%] mx-auto bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 block"
              >
                Credit Card
              </button>

              <button
                onClick={() => handlePaymentMethodSelect("PayPal")}
                className="w-[30%] max-w-[50%] mx-auto  bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 block"
              >
                PayPal
              </button>

              <button
                onClick={() => handlePaymentMethodSelect("UPI")}
                className="w-[30%] max-w-[50%] mx-auto bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 block"
              >
                UPI
              </button>

              <button
                onClick={() => handlePaymentMethodSelect("Net Banking")}
                className="w-[30%] max-w-[50%] mx-auto  bg-black  text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 block"
              >
                Net Banking
              </button>

              <button
                onClick={handleBackToCart}
                className="w-[30%] max-w-[50%] mx-auto  bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 block"
              >
                Back to Cart
              </button>
            </div>
          ) : (
            // Payment Form Section
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-bold text-center mb-4">
                {selectedPaymentMethod} Payment
              </h3>
              
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={paymentData.amount}
                    onChange={handlePaymentInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    PIN
                  </label>
                  <input
                    type="password"
                    name="pin"
                    value={paymentData.pin}
                    onChange={handlePaymentInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter 4-digit PIN"
                    maxLength="4"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
                  >
                    Pay ₹{paymentData.amount || "0"}
                  </button>

                  <button
                    type="button"
                    onClick={handleBackToMethods}
                    className="w-full bg-gray-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-600"
                  >
                    Back to Payment Methods
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

