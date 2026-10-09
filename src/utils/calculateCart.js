function calculateCart(cart, shippingCost = 15000, freeShippingMinimum = 500000) {
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shippingCostFinal =
    subtotal === 0 || subtotal >= freeShippingMinimum
      ? 0
      : shippingCost;

  const total = subtotal + shippingCostFinal;

  return {
    totalItems,
    subtotal,
    shippingCost: shippingCostFinal,
    total
  };
}

export default calculateCart;
