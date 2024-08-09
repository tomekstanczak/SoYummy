// Ułożyć stronę z wyszukiwaniem według słowa kluczowego - powinna zostać wyświetlona lista przepisów dla wybranego słowa (wersja mobilna, tabletowa i desktopowa).
// - MainPageTitle - uniwersalny komponent tytułu strony;
// - SerchBar - który renderuje SearchForm z MainPage i SearchTypeSelector;
// - SearchedRecipesList - komponent renderujący listę przepisów tak samo jak na stronie CategoriesPage.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar";
import SearchedRecipesList from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import { useSearch } from "../../context/SearchContext";
import styles from "./SearchPage.module.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const {
    recipes,
    searchError,
    searchRecipesByTitle,
    searchRecipesByIngredient,
  } = useSearch();

  const searchValue = query.get("search");
  const searchType = query.get("type");

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

  const handleSearch = (searchValue, searchType) => {
    const url = new URL(window.location);
    url.searchParams.set("search", searchValue);
    url.searchParams.set("type", searchType);
    window.history.pushState({}, "", url.toString());
    if (searchType === "title") {
      searchRecipesByTitle(searchValue);
    } else if (searchType === "ingredient") {
      searchRecipesByIngredient(searchValue);
    }
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
