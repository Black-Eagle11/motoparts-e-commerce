import { useProductContext } from "../context/ProductContext";

function useProducts() {
  const productContext = useProductContext();

  if (!productContext) {
    throw new Error(
      "useProducts harus digunakan di dalam ProductProvider."
    );
  }

  return productContext;
}

export default useProducts;
