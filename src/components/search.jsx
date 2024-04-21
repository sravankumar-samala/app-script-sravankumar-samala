import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="Search Products"
      />
      <button type="button">
        <CiSearch />
      </button>
    </div>
  );
}
