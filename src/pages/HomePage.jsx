import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import ProductGrid from "../components/products/ProductGrid";
import Button from "../components/common/Button";
import storeInfo from "../data/storeInfo";
import useProducts from "../hooks/useProducts";

function HomePage() {
  const { products } = useProducts();
  const featuredProducts = products
    .filter((product) => product.rating >= 4.7)
    .slice(0, 4);

  return (
    <PageContainer>
      <section className="hero-section">
        <p className="hero-label">MOTOPARTS ONLINE STORE</p>
        <h1>{storeInfo.tagline}</h1>
        <p>{storeInfo.description}</p>

        <Link to="/products">
          <Button>Lihat Semua Produk</Button>
        </Link>
      </section>

      <section className="featured-section">
        <h2>Produk Pilihan</h2>
        <p>Komponen pilihan untuk kebutuhan perawatan motor lu.</p>
        <ProductGrid products={featuredProducts} />
      </section>
    </PageContainer>
  );
}

export default HomePage;
