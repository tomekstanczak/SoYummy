// Komponent renderuje listę popularnych kategorii (Breakfast, Miscellaneous, Chicken, Desserts) z 1/2/4 przepisami z tych kategorii, otrzymanymi z backendu w wyniku żądania.
// Kliknięcie przycisku See all przekierowuje do ścieżki /categories/:categoryName na stronę CategoriesPage z przepisami dla tej kategorii.
// Kliknięcie wybranego przepisu powinno przekierować użytkownika na inną stronę, aby wyświetlić informacje o jednym przepisie RecipiesPage.
// Kliknięcie przycisku Other categories powinno przekierować użytkownika na stronę CategoriesPage.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import recipeData from "../../../../public/dummyMeal.json";

import styles from "./PreviewCategories.module.css";

const categories = ["Breakfast", "Miscellaneous", "Chicken", "Desserts"];

const PreviewCategories = () => {
  const [categoryData, setCategoryData] = useState({});
  const [numOfRecipes, setNumOfRecipes] = useState(4);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const results = {};
  //       for (const category of categories) {
  //         results[category] = await fetch(`/api/categories/${category}`).then(
  //           (res) => res.json()
  //         );
  //       }
  //       setCategoryData(results);
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    setCategoryData(recipeData);
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
    navigate(`/categories/${category}`);
  };

  const handleOtherCategories = () => {
    navigate("/categories");
  };

  return (
    <div className={styles.previewCategoriesContainer}>
      {categories.map((category) => (
        <div className={styles.previewCategory} key={category}>
          <div className={styles.contentContainer}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.recipesContainer}>
              {categoryData[category]
                ?.slice(0, numOfRecipes)
                .map((recipe, index) => (
                  <div
                    key={index}
                    className={styles.recipe}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    <div className={styles.recipeTitleContainer}>
                      <h4 className={styles.recipeTitle}>{recipe.title}</h4>
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
        className={styles.otherCategoriesBtn}
        onClick={handleOtherCategories}
      >
        Other categories
      </button>
    </div>
  );
};
export default PreviewCategories;
