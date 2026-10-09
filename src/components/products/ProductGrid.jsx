import ProductCard from "./ProductCard";
import EmptyState from "../common/EmptyState";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="Produk tidak ditemukan"
        message="Coba kata kunci atau kategori yang berbeda."
      />
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
