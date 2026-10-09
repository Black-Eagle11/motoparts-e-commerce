import PageContainer from "../components/layout/PageContainer";
import storeInfo from "../data/storeInfo";

function AboutPage() {
  const categories = [
    {
      title: "Komponen Mesin",
      description: "Berbagai komponen untuk mendukung performa mesin motor."
    },
    {
      title: "CVT",
      description: "Komponen sistem transmisi untuk kebutuhan perawatan motor."
    },
    {
      title: "Pengereman",
      description: "Komponen pendukung sistem pengereman motor."
    },
    {
      title: "Kelistrikan",
      description: "Komponen kelistrikan untuk menunjang fungsi kendaraan."
    },
    {
      title: "Aksesori",
      description: "Aksesori dan komponen tambahan untuk motor."
    }
  ];

  return (
    <PageContainer>
      <section className="about-page">
        <h1>Tentang {storeInfo.name}</h1>

        <p>{storeInfo.description}</p>
        <h2>Visi Kami</h2>
        <p>
          Memudahkan pengguna motor menemukan spare part melalui
          pengalaman belanja online yang sederhana dan informatif.
        </p>

        <h2>Kategori Produk</h2>

        <div className="about-category-grid">
          {categories.map((category) => (
            <article key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>

        <h2>Informasi Kontak</h2>
        <p>Email: {storeInfo.email}</p>
        <p>Telepon: {storeInfo.phone}</p>
      </section>
    </PageContainer>
  );
}

export default AboutPage;
