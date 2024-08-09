import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchTypeSelector from "../SearchTypeSelector/SearchTypeSelector";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchType, setSearchType] = useState("query");

  const handleSearch = (searchValue) => {
    onSearch(searchValue, searchType);
  };

  return (
    <div className={styles.searchBar}>
      <SearchForm onSearch={handleSearch} />
      <SearchTypeSelector
        searchType={searchType}
        setSearchType={setSearchType}
      />
    </div>
  );
};

export default SearchBar;
