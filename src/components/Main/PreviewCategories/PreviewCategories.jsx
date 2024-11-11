import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { ThemeContext } from "../../../context/ThemeContext";

import styles from "./PreviewCategories.module.css";

const categories = ["Breakfast", "Miscellaneous", "Chicken", "Dessert"];

const PreviewCategories = () => {
  const [categoryData, setCategoryData] = useState({});
  const [numOfRecipes, setNumOfRecipes] = useState(4);

  const { isDark } = useContext(ThemeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://soyummybe.onrender.com/recipes/recipes/main-page"
        );

        const fetchedData = {};

        if (data.data.recipes) {
          categories.forEach((category) => {
            fetchedData[category] = data.data.recipes[category] || [];
          });
        } else {
          console.error("No recipes found in the data.");
        }

        setCategoryData(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateNumOfRecipes = () => {
      if (window.innerWidth < 768) {
        setNumOfRecipes(1);
      } else if (window.innerWidth < 1440) {
        setNumOfRecipes(2);
      } else {
        setNumOfRecipes(4);
      }
    };

    updateNumOfRecipes();
    window.addEventListener("resize", updateNumOfRecipes);

    return () => window.removeEventListener("resize", updateNumOfRecipes);
  }, []);

  const handleSeeAll = (category) => {
    navigate(`/categories?category=${category}`);
  };

  const handleOtherCategories = () => {
    navigate("/categories");
  };

  return (
    <div className={styles.previewCategoriesContainer}>
      {categories.map((category) => (
        <div className={styles.previewCategory} key={category}>
          <div className={styles.contentContainer}>
            <h3
              className={`${styles.categoryTitle} ${isDark ? styles.dark : ""}`}
            >
              {category}
            </h3>
            <div className={styles.recipesContainer}>
              {categoryData[category]
                ?.slice(0, numOfRecipes)
                .map((recipe, index) => (
                  <div
                    key={index}
                    className={styles.recipe}
                    onClick={() => navigate(`/recipe/${recipe._id}`)}
                  >
                    <div
                      className={`${styles.recipeTitleContainer} ${
                        isDark ? styles.dark : ""
                      }`}
                    >
                      <img
                        src={recipe.thumb}
                        alt={recipe.title}
                        className={styles.recipeImage}
                      />
                      <h4
                        className={`${styles.recipeTitle} ${
                          isDark ? styles.dark : ""
                        }`}
                      >
                        {recipe.title}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button
            className={styles.recipeSeeAllBtn}
            onClick={() => handleSeeAll(category)}
          >
            See all
          </button>
        </div>
      ))}
      <button
        className={`${styles.otherCategoriesBtn} ${isDark ? styles.dark : ""}`}
        onClick={handleOtherCategories}
      >
        Other categories
      </button>
    </div>
  );
};

export default PreviewCategories;
