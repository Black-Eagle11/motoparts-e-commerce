import categories from "../../data/categories";

function Sidebar({ selectedCategory, onCategoryChange }) {
  return (
    <aside className="sidebar">
      <h3>Kategori Spare Part</h3>

      <div className="sidebar-menu">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={
              selectedCategory === category.id
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
