import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="app">
              <Navbar />

              <AppRoutes />

              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
