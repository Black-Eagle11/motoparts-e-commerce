import { Link, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/common/Button";
import NotFoundPage from "./NotFoundPage";
import productService from "../services/productService";
import formatCurrency from "../utils/formatCurrency";
import useCart from "../hooks/useCart";

function ProductDetailPage() {
  const { id } = useParams();
  const product = productService.getProductById(id);
  const { addToCart } = useCart();

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <PageContainer>
      <section className="product-detail">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />

        <div className="product-detail-content">
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <p>Rating: {product.rating}/5</p>
          <h2>{formatCurrency(product.price)}</h2>
          <p>{product.description}</p>
          <p>Stok tersedia: {product.stock}</p>
          <p>
            Kompatibilitas: {product.compatible.join(", ")}
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

          <div>
            <Link to="/products">Kembali ke Katalog</Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default ProductDetailPage;
