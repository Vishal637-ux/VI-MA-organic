// Get cart from localStorage
export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Save cart in localStorage
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
export function addToCart(product) {
  const cart = getCart();

  // check if product already exists in cart
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    });
  }

  saveCart(cart);
}
