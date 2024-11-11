import styles from "./SearchTypeSelector.module.css";

const SearchTypeSelector = ({ searchType, setSearchType }) => {
  return (
    <div className={styles.selectorSearch}>
      <label>
        Search by:
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className={styles.selectSearch}
        >
          <option value="title">Title</option>
          <option value="ingredient">Ingredient</option>
        </select>
      </label>
    </div>
  );
};

export default SearchTypeSelector;
