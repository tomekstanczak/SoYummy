// Ułożyć stronę z wyszukiwaniem według słowa kluczowego - powinna zostać wyświetlona lista przepisów dla wybranego słowa (wersja mobilna, tabletowa i desktopowa).
// - MainPageTitle - uniwersalny komponent tytułu strony;
// - SerchBar - który renderuje SearchForm z MainPage i SearchTypeSelector;
// - SearchedRecipesList - komponent renderujący listę przepisów tak samo jak na stronie CategoriesPage.

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import MainPageTitle from "./MainPageTitle";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar";
import SearchedRecipesList from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";

import styles from "./SearchPage.module.css";

import dummyData from "../../../public/dummySearchResults.json";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const [recipes, setRecipes] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const searchValue = query.get("search");
  const searchType = query.get("type");

  useEffect(() => {
    console.log("Search Value:", searchValue);
    console.log("Search Type:", searchType);

    if (searchValue && searchType) {
      // Symulacja żądania do backendu
      const fetchRecipes = async () => {
        try {
          // const response = await fetch(
          //   `api/search?${searchType}=${searchValue}`
          // );
          // const data = await response.json();
          // setRecipes(data.recipes);

          const data = dummyData;
          const filteredRecipes = data.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          setRecipes(filteredRecipes);
        } catch (error) {
          setSearchError("Failed to fetch recipes. Please try again.");
          setRecipes([]);
        }
      };
      fetchRecipes();
    }
  }, [searchValue, searchType]);

  const handleSearch = (searchValue, searchType) => {
    const url = new URL(window.location);
    url.searchParams.set("search", searchValue);
    url.searchParams.set("type", searchType);
    window.history.pushState({}, "", url.toString());
    window.location.search = url.search;
  };

  return (
    <div className={styles.searchPage}>
      {/* <MainPageTitle title="Search Recipes" /> */}
      <SearchBar onSearch={handleSearch} />
      {searchError && <div className={styles.error}>{searchError}</div>}
      <SearchedRecipesList recipes={recipes} />
    </div>
  );
};

export default SearchPage;
