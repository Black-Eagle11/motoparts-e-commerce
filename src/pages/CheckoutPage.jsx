import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import EmptyState from "../components/common/EmptyState";
import ErrorMessage from "../components/common/ErrorMessage";
import Button from "../components/common/Button";
import useCart from "../hooks/useCart";
import orderService from "../services/orderService";

function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleCheckout(customer) {
    if (cart.length === 0) {
      setError("Keranjang masih kosong.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const order = orderService.createOrder(customer, cart, total);
      clearCart();
      navigate("/order-success", {
        state: { order }
      });
    } catch {
      setError("Pesanan gagal disimpan. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  }

  if (cart.length === 0) {
    return (
      <PageContainer>
        <EmptyState
          title="Tidak ada pesanan"
          message="Tambahkan produk ke keranjang sebelum checkout."
          action={
            <Link to="/products">
              <Button>Ke Katalog</Button>
            </Link>
          }
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <section className="checkout-page">
        <h1>Checkout</h1>
        <ErrorMessage message={error} />

        <div className="checkout-layout">
          <CheckoutForm
            onSubmit={handleCheckout}
            loading={loading}
          />

          <OrderSummary />
        </div>
      </section>
    </PageContainer>
  );
}

export default CheckoutPage;
