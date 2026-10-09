import useProducts from "../../hooks/useProducts";

function ProductSort() {
  const { sort, setSort } = useProducts();

  return (
    <div className="product-sort">
      <label htmlFor="product-sort">
        Urutkan:
      </label>

      <select
        id="product-sort"
        value={sort}
        onChange={(event) => setSort(event.target.value)}
      >
        <option value="default">Urutan awal</option>
        <option value="price-low">Harga termurah</option>
        <option value="price-high">Harga termahal</option>
        <option value="rating">Rating tertinggi</option>
      </select>
    </div>
  );
}

export default ProductSort;
