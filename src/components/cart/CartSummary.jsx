import { Link } from "react-router-dom";
import Button from "../common/Button";
import formatCurrency from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";

function CartSummary() {
  const { cart, totalItems, subtotal, shippingCost, total } = useCart();

  return (
    <section className="cart-summary">
      <h2>Ringkasan Belanja</h2>

      <p>Total jenis produk: {cart.length}</p>
      <p>Total barang: {totalItems}</p>
      <p>Subtotal: {formatCurrency(subtotal)}</p>
      <p>Ongkos kirim: {formatCurrency(shippingCost)}</p>

      <h3>Total pembayaran: {formatCurrency(total)}</h3>

      {subtotal > 0 ? (
        <Link to="/checkout">
          <Button>Lanjut ke Checkout</Button>
        </Link>
      ) : (
        <Button disabled variant="secondary">
          Keranjang Kosong
        </Button>
      )}
    </section>
  );
}

export default CartSummary;
