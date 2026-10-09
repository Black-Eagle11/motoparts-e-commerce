import products from "../data/products";

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

function searchProducts(keyword) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

const productService = {
  getAllProducts,
  getProductById,
  searchProducts
};

export default productService;
