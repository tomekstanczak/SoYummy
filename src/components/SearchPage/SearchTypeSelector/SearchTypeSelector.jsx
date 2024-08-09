import styles from "./SearchTypeSelector.module.css";

const SearchTypeSelector = ({ searchType, setSearchType }) => {
  return (
    <div className={styles.selector}>
      <label>
        Search by:
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className={styles.select}
        >
          <option value="query">Title</option>
          <option value="ingredient">Ingredient</option>
        </select>
      </label>
    </div>
  );
};

export default SearchTypeSelector;
