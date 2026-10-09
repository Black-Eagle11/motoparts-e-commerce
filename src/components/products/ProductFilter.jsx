import categories from "../../data/categories";
import useProducts from "../../hooks/useProducts";

function ProductFilter() {
  const { category, setCategory } = useProducts();

  return (
    <div className="product-filter">
      <label htmlFor="category-filter">
        Kategori spare part:
      </label>

      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductFilter;
