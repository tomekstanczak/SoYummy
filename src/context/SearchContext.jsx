import { createContext, useState, useContext } from "react";
import axios from "axios";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async (keyword) => {
    setLoading(true);
    setSearchError(null);
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/recipes/search?keyword=${keyword}`
      );
      const data = response.data.data.recipes;
      setRecipes(data);
    } catch (error) {
      setSearchError("Failed to fetch recipes. Please try again.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{ recipes, searchError, loading, searchRecipes }}
    >
      {children}
    </SearchContext.Provider>
  );
};
