// Komponent renderuje stronę z listą kategorii żywności i listą przepisów dla wybranej kategorii (wersja mobilna, tabletowa i desktopowa).
// Po przejściu na tę stronę ustawiana jest kategoria, z której przyszedł użytkownik.
// Jeśli użytkownik trafił na stronę nie przez przekierowanie, ale z nawigacji w menu głównym, kategoria jest domyślnie ustawiana na Beef.
// W górnej części strony znajduje się menu z listą kategorii. Po kliknięciu kategorii zostanie wysłane żądanie pobrania przepisów z wybranej kategorii:
//  - W przypadku pomyślnej odpowiedzi wyświetlona zostanie lista przepisów;
//  - W przypadku niepomyślnej odpowiedzi wyświetlony zostanie odpowiedni blok informacyjny.
// Po zmianie kategorii, do backendu zostanie wysłane nowe żądanie. Kliknięcie podglądu wybranego przepisu powoduje otwarcie strony RecipePage.

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CategoriesPage.module.css";
import Loader from "../../components/Common/Loader/Loader";
import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import { fetchCategories, fetchRecipes } from "./CetegoriesServices";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const categories = await fetchCategories();
        setCategories(categories);

        const params = new URLSearchParams(location.search);
        const initialCategory = params.get("category") || "Beef";
        setSelectedCategory(initialCategory);

        const recipes = await fetchRecipes(initialCategory);
        setRecipes(recipes);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [location.search]);

  const handleCategoryChange = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    try {
      const recipes = await fetchRecipes(category);
      setRecipes(recipes);
      setError(null);
    } catch (err) {
      setError(err.message);
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
        <MainPageTitle title="Categories" />
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
                  <spam className={styles.recipeTitle}>{recipe.title}</spam>
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
