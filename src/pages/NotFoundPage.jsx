import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/common/Button";

function NotFoundPage() {
  return (
    <PageContainer>
      <section className="not-found-page">
        <h1>404</h1>
        <h2>Halaman Tidak Ditemukan</h2>
        <p>
          Halaman yang lu cari tidak tersedia atau alamatnya salah.
        </p>

        <Link to="/">
          <Button>Kembali ke Beranda</Button>
        </Link>
      </section>
    </PageContainer>
  );
}

export default NotFoundPage;
