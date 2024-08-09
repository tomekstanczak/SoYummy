// Komponent renderuje stronę z listą kategorii żywności i listą przepisów dla wybranej kategorii (wersja mobilna, tabletowa i desktopowa).
// Po przejściu na tę stronę ustawiana jest kategoria, z której przyszedł użytkownik.
// Jeśli użytkownik trafił na stronę nie przez przekierowanie, ale z nawigacji w menu głównym, kategoria jest domyślnie ustawiana na Beef.
// W górnej części strony znajduje się menu z listą kategorii. Po kliknięciu kategorii zostanie wysłane żądanie pobrania przepisów z wybranej kategorii:
//  - W przypadku pomyślnej odpowiedzi wyświetlona zostanie lista przepisów;
//  - W przypadku niepomyślnej odpowiedzi wyświetlony zostanie odpowiedni blok informacyjny.
// Po zmianie kategorii, do backendu zostanie wysłane nowe żądanie. Kliknięcie podglądu wybranego przepisu powoduje otwarcie strony RecipePage.

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CategoriesPage.module.css";
import Loader from "../../components/Common/Loader/Loader";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipes/category-list"
        );
        setCategories(response.data.data.categories);
      } catch (err) {
        setError("Failed to fetch categories");
      }
    };

    const fetchRecipes = async (category) => {
      console.log(category);
      try {
        const response = await axios.get(
          `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipes/${category}`
        );
        setRecipes(response.data.data.recipes);
      } catch (err) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    const params = new URLSearchParams(location.search);
    const initialCategory = params.get("category") || "Beef";
    setSelectedCategory(initialCategory);
    fetchCategories();
    fetchRecipes(initialCategory);
  }, [location.search]);

  const handleCategoryChange = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    console.log("handle:", category);
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipes/${category}`
      );
      setRecipes(response.data.data.recipes);
      setError(null);
    } catch (err) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <h2>Categories</h2>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li
              key={category._id}
              className={
                selectedCategory === category.title ? styles.activeCategory : ""
              }
              onClick={() => handleCategoryChange(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mainContent}>
        {loading ? (
          <Loader />
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <div>
            <ul className={styles.recipeList}>
              {recipes.map((recipe) => (
                <li
                  key={recipe._id}
                  className={styles.recipeItem}
                  onClick={() => handleRecipeClick(recipe._id)}
                >
                  <img src={recipe.thumb} className={styles.recipePicture} />
                  {recipe.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
