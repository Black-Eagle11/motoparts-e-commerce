import useProducts from "../../hooks/useProducts";

function ProductSearch() {
  const { search, setSearch } = useProducts();

  return (
    <div className="product-search">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Cari spare part motor..."
        aria-label="Cari spare part motor"
      />

      {search && (
        <button type="button" onClick={() => setSearch("")}>
          Hapus
        </button>
      )}
    </div>
  );
}

export default ProductSearch;
