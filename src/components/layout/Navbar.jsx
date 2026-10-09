import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        MotoParts
      </Link>

      <nav className="navbar-menu">
        <Link to="/">Beranda</Link>
        <Link to="/products">Spare Part</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/cart">
          Keranjang ({totalItems})
        </Link>
      </nav>

      <button
        type="button"
        onClick={toggleTheme}
        className="theme-button"
      >
        {theme === "light" ? "Mode Gelap" : "Mode Terang"}
      </button>
    </header>
  );
}

export default Navbar;
