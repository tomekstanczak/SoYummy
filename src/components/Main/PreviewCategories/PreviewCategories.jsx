// Komponent renderuje listę popularnych kategorii (Breakfast, Miscellaneous, Chicken, Desserts) z 1/2/4 przepisami z tych kategorii, otrzymanymi z backendu w wyniku żądania.
// Kliknięcie przycisku See all przekierowuje do ścieżki /categories/:categoryName na stronę CategoriesPage z przepisami dla tej kategorii.
// Kliknięcie wybranego przepisu powinno przekierować użytkownika na inną stronę, aby wyświetlić informacje o jednym przepisie RecipiesPage.
// Kliknięcie przycisku Other categories powinno przekierować użytkownika na stronę CategoriesPage.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PreviewCategories.module.css";

const categories = ["Breakfast", "Miscellaneous", "Chicken", "Desserts"];

const PreviewCategories = () => {
  const [categoryData, setCategoryData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const results = {};
      for (const category of categories) {
        results[category] = await fetch(`/api/categories/${category}`).then(
          (res) => res.json()
        );
      }
      setCategoryData(results);
    };

    fetchData();
  }, []);

  const handleSeeAll = (category) => {
    navigate(`/categories/${category}`);
  };

  const handleOtherCategories = () => {
    navigate("/categories");
  };

  return (
    <div className="previewCategoriesContainer">
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="recipes">
            {categoryData[category]?.slice(0, 4).map((recipe, index) => (
              <div key={index} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                <h4>{recipe.title}</h4>
              </div>
            ))}
          </div>
          <button onClick={() => handleSeeAll(category)}>See all</button>
        </div>
      ))}
      <button onClick={handleOtherCategories}>Other categories</button>
    </div>
  );
};

export default PreviewCategories;
