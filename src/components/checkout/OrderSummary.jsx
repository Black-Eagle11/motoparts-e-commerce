import formatCurrency from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";

function OrderSummary() {
  const { cart, subtotal, shippingCost, total } = useCart();

  return (
    <section className="order-summary">
      <h2>Ringkasan Pesanan</h2>

      {cart.length === 0 ? (
        <p>Belum ada produk dalam pesanan.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                {formatCurrency(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="order-summary-total">
        <p>Subtotal: {formatCurrency(subtotal)}</p>
        <p>Ongkos kirim: {formatCurrency(shippingCost)}</p>
        <h3>Total: {formatCurrency(total)}</h3>
      </div>
    </section>
  );
}

export default OrderSummary;
