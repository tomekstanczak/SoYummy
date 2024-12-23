// Komponent wysyła do backendu żądanie dotyczące popularnych przepisów kulinarnych.
// W przypadku pomyślnej odpowiedzi, komponent wyświetla listę pasujących pozycji.
// W przypadku błędu, komponent wyświetla komunikat o braku popularnych przepisów w danym momencie.
// Każdy przepis musi być zaimplementowany jako link. Klikając na dowolny z nich, użytkownik powinien zostać przekierowany na stronę z opisem odpowiedniego przepisu RecipePage.

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import styles from "./PopularRecipes.module.css";

const PopularRecipe = ({ isDark }) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await axios.get(
          "https://soyummybe.onrender.com/popular-recipe/popular-recipe"
        );
        setRecipes(response.data.data);
        setError(null);
      } catch (err) {
        setRecipes([]);
        setError("No popular recipes available at the moment.");
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className={`${styles.popularContainer} ${isDark ? styles.dark : ""}`}>
      <h3>Popular recipes</h3>
      {error && <p>{error}</p>}
      {recipes.length > 0 ? (
        <ul className={styles.popularList}>
          {recipes.map((recipe) => (
            <li key={recipe._id} className={styles.popularListItems}>
              <img src={recipe.thumb} className={styles.popularPictures} />
              <div className={styles.popularText}>
                <Link
                  to={`/recipe/${recipe._id}`}
                  className={styles.popularTitle}
                >
                  {recipe.title}
                </Link>
                <p className={styles.popularDescription}>
                  {recipe.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !error && <Loader />
      )}
    </div>
  );
};

export default PopularRecipe;
