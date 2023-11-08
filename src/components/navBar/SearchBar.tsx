import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
