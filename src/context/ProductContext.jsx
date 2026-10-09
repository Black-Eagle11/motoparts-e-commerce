import { createContext, useContext, useState } from "react";
import products from "../data/products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;

      return 0;
    });

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
