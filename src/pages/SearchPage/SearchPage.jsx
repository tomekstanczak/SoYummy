import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar";
import SearchedRecipesList from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import { useSearch } from "../../context/SearchContext";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const {
    recipes,
    searchError,
    searchRecipesByTitle,
    searchRecipesByIngredient,
    pagination,
  } = useSearch();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);

  useEffect(() => {
    if (searchValue) {
      if (searchType === "title") {
        searchRecipesByTitle(searchValue, currentPage, recipesPerPage);
      } else if (searchType === "ingredient") {
        searchRecipesByIngredient(searchValue, currentPage, recipesPerPage);
      }
    }
  }, [searchValue, searchType, currentPage, recipesPerPage]);

  const handleSearch = (value, type) => {
    setSearchValue(value);
    setSearchType(type);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginationButtons = [];
  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={styles.paginationButton}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.searchPage}>
      <SearchBar onSearch={handleSearch} />
      {searchError && <div className={styles.error}>{searchError}</div>}
      <SearchedRecipesList
        recipes={recipes.slice(
          (currentPage - 1) * recipesPerPage,
          currentPage * recipesPerPage
        )}
      />
      <div className={styles.pagination}>{paginationButtons}</div>
    </div>
  );
};

export default SearchPage;
