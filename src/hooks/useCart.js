import { useCartContext } from "../context/CartContext";

function useCart() {
  const cartContext = useCartContext();

  if (!cartContext) {
    throw new Error("useCart harus digunakan di dalam CartProvider.");
  }

  return cartContext;
}

export default useCart;
