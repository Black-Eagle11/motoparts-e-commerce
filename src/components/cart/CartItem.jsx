import Button from "../common/Button";
import formatCurrency from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{formatCurrency(item.price)}</p>

        <label>
          Jumlah:
          <input
            type="number"
            min="1"
            max={item.stock}
            value={item.quantity}
            onChange={(event) => {
              const value = event.target.value;
              if (value !== "") {
                updateQuantity(item.id, Number(value));
              }
            }}
          />
        </label>

        <p>
          Subtotal: {formatCurrency(item.price * item.quantity)}
        </p>

        <Button
          variant="danger"
          onClick={() => removeFromCart(item.id)}
        >
          Hapus
        </Button>
      </div>
    </article>
  );
}

export default CartItem;
