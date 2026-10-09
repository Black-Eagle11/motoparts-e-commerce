import storeInfo from "../../data/storeInfo";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>{storeInfo.name}</h3>
          <p>{storeInfo.tagline}</p>
          <p>{storeInfo.description}</p>
        </div>

        <div>
          <h4>Kontak</h4>
          <p>Email: {storeInfo.email}</p>
          <p>Telepon: {storeInfo.phone}</p>
        </div>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} {storeInfo.name}. Proyek prototipe Web
        Prototyping.
      </p>
    </footer>
  );
}

export default Footer;
