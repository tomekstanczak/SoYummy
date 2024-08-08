import styles from "./SearchTypeSelector.module.css";

const SearchTypeSelector = ({ searchType, setSearchType }) => {
  return (
    <div className={styles.selector}>
      <label>
        <input
          type="radio"
          value="query"
          checked={searchType === "query"}
          onChange={() => setSearchType("query")}
        />
        Keyword
      </label>
      <label>
        <input
          type="radio"
          value="ingredient"
          checked={searchType === "ingredient"}
          onChange={() => setSearchType("ingredient")}
        />
        Ingredient
      </label>
    </div>
  );
};

export default SearchTypeSelector;
