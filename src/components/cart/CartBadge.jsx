import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-badge-link">
      <span>Keranjang</span>
      <span className="cart-badge">
        {totalItems}
      </span>
    </Link>
  );
}

export default CartBadge;
