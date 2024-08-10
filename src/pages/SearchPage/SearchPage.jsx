// Ułożyć stronę z wyszukiwaniem według słowa kluczowego - powinna zostać wyświetlona lista przepisów dla wybranego słowa (wersja mobilna, tabletowa i desktopowa).
// - MainPageTitle - uniwersalny komponent tytułu strony;
// - SerchBar - który renderuje SearchForm z MainPage i SearchTypeSelector;
// - SearchedRecipesList - komponent renderujący listę przepisów tak samo jak na stronie CategoriesPage.

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
  } = useSearch();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title");

  useEffect(() => {
    if (searchValue) {
      if (searchType === "title") {
        searchRecipesByTitle(searchValue);
      } else if (searchType === "ingredient") {
        searchRecipesByIngredient(searchValue);
      }
    }
  }, [
    searchValue,
    searchType,
    searchRecipesByTitle,
    searchRecipesByIngredient,
  ]);

  const handleSearch = (value, type) => {
    setSearchValue(value);
    setSearchType(type);
  };

  return (
    <div className={styles.searchPage}>
      <SearchBar onSearch={handleSearch} />
      {searchError && <div className={styles.error}>{searchError}</div>}
      <SearchedRecipesList recipes={recipes} />
    </div>
  );
};

export default SearchPage;
