import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";
import useCart from "../hooks/useCart";

function CartPage() {
  const { cart, clearCart } = useCart();

  return (
    <PageContainer>
      <section className="cart-page">
        <h1>Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <EmptyState
            title="Keranjang masih kosong"
            message="Pilih spare part yang lu butuhkan terlebih dahulu."
            action={
              <Link to="/products">
                <Button>Belanja Sekarang</Button>
              </Link>
            }
          />
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <CartSummary />

            <Button variant="danger" onClick={clearCart}>
              Kosongkan Keranjang
            </Button>
          </>
        )}
      </section>
    </PageContainer>
  );
}

export default CartPage;
