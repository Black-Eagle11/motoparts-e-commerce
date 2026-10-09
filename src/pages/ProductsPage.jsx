import PageContainer from "../components/layout/PageContainer";
import ProductSearch from "../components/products/ProductSearch";
import ProductFilter from "../components/products/ProductFilter";
import ProductSort from "../components/products/ProductSort";
import ProductGrid from "../components/products/ProductGrid";
import useProducts from "../hooks/useProducts";

function ProductsPage() {
  const { filteredProducts } = useProducts();

  return (
    <PageContainer>
      <section className="products-page">
        <h1>Katalog Spare Part</h1>
        <p>Temukan komponen yang sesuai dengan kebutuhan motor lu.</p>

        <div className="product-toolbar">
          <ProductSearch />
          <ProductFilter />
          <ProductSort />
        </div>

        <p>
          Menampilkan {filteredProducts.length} produk
        </p>

        <ProductGrid products={filteredProducts} />
      </section>
    </PageContainer>
  );
}

export default ProductsPage;
