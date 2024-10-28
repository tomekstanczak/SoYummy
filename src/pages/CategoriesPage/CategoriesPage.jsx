import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CategoriesPage.module.css";
import Loader from "../../components/Common/Loader/Loader";
import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import { fetchCategories, fetchRecipes } from "./CetegoriesServices";
import leaf from "../../assets/images/spinach.png";
import notFoundPicture from "../../assets/images/404.png";
import { ThemeContext } from "../../context/ThemeContext";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const { isDark, setHeaderTextColor } = useContext(ThemeContext);

  useEffect(() => {
    setHeaderTextColor("white");

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
      <div className={`${styles.topbar} ${isDark ? styles.dark : ""} `}>
        <MainPageTitle title="Categories" isDark={isDark} />
        <ul className={`${styles.categoryList} ${isDark ? styles.dark : ""} `}>
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
          <div className={styles.notFoundContainer}>
            <img src={notFoundPicture}></img>
            <p className={styles.error}>{error}</p>
          </div>
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
                  <span className={styles.recipeTitle}>{recipe.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <img src={leaf} className={styles.leafPicture} />
    </div>
  );
};

export default CategoriesPage;
