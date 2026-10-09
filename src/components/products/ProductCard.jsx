import { Link } from "react-router-dom";
import Button from "../common/Button";
import formatCurrency from "../../utils/formatCurrency";
import useCart from "../../hooks/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </Link>

      <div className="product-card-content">
        <h3>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-rating">
          Rating: {product.rating}/5
        </p>

        <p className="product-price">
          {formatCurrency(product.price)}
        </p>

        <p>
          Stok: {product.stock}
        </p>

        {product.stock > 0 ? (
          <Button onClick={() => addToCart(product.id)}>
            Tambah ke Keranjang
          </Button>
        ) : (
          <Button disabled variant="secondary">
            Stok Habis
          </Button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
