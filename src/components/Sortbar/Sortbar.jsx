export default function Sortbar({ setSort }) {
  return (
    <div className="sortbar">
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="az">Name: A-Z</option>
        <option value="za">Name: Z-A</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
