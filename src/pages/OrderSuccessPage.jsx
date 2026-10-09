import { Link, useLocation, Navigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/common/Button";
import formatCurrency from "../utils/formatCurrency";

function OrderSuccessPage() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/products" replace />;
  }

  return (
    <PageContainer>
      <section className="order-success">
        <div className="success-icon">✓</div>

        <h1>Pesanan Berhasil Dibuat!</h1>

        <p>
          Terima kasih, {order.customer.name}. Pesanan lu berhasil
          disimpan.
        </p>

        <div className="order-success-details">
          <p>
            <strong>Nomor pesanan:</strong> {order.id}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Metode pembayaran:</strong>{" "}
            {order.customer.paymentMethod}
          </p>
          <p>
            <strong>Total pembayaran:</strong>{" "}
            {formatCurrency(order.total)}
          </p>
          <p>
            <strong>Alamat pengiriman:</strong>{" "}
            {order.customer.address}
          </p>
        </div>

        <Link to="/products">
          <Button>Belanja Lagi</Button>
        </Link>
      </section>
    </PageContainer>
  );
}

export default OrderSuccessPage;
