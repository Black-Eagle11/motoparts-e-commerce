
import { createContext, useContext, useState, useEffect } from "react";
import products from "../data/products";
import calculateCart from "../utils/calculateCart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("motoparts-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("motoparts-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product || product.stock <= 0) return;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          return currentCart;
        }

        return currentCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  function updateQuantity(productId, quantity) {
    const product = products.find((item) => item.id === productId);

    if (!product) return;

    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.min(quantity, product.stock)
            }
          : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const summary = calculateCart(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems: summary.totalItems,
        subtotal: summary.subtotal,
        shippingCost: summary.shippingCost,
        total: summary.total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
