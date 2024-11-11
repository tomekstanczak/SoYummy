import { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for recipes..."
        className={styles.inputSearch}
      />
      <button type="submit" className={styles.buttonSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
