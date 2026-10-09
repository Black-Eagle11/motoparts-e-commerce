function createOrder(customer, cart, total) {
  if (!customer || !cart || cart.length === 0) {
    throw new Error("Data pelanggan dan keranjang wajib diisi.");
  }

  const order = {
    id: `MP-${Date.now()}`,
    customer,
    items: cart,
    total,
    status: "Menunggu konfirmasi",
    createdAt: new Date().toISOString()
  };

  const savedOrders = JSON.parse(
    localStorage.getItem("motoparts-orders") || "[]"
  );

  savedOrders.push(order);

  localStorage.setItem(
    "motoparts-orders",
    JSON.stringify(savedOrders)
  );

  return order;
}

function getOrders() {
  return JSON.parse(
    localStorage.getItem("motoparts-orders") || "[]"
  );
}

const orderService = {
  createOrder,
  getOrders
};

export default orderService;
