// Ułożyć stronę Favorite (wersja na urządzenia mobilne, tablety i komputery stacjonarne).
// Na stronie należy wyświetlić galerię z listą przepisów, które zostały zapisane po dodaniu ich przez kliknięcie przycisku AddToFavorite.
// Na karcie z przepisem należy wyświetlić przycisk usuwania, który usunie przepis z listy na backendzie, a także usunie przepis ze strony Favorite.
// Po kliknięciu przycisku See recipe, użytkownik powinien zostać przekierowany na stronę RecipePage z opisem odpowiedniego przepisu.

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FavoritePage.module.css";
import EmptyState from "./EmptyState/EmptyState";

// Funkcja do pobierania przepisów z backendu
const fetchFavoriteRecipes = async () => {
  const response = await fetch(
    "https://so-yummy-31fabc853d58.herokuapp.com/favorites/favorites"
  ); // Ścieżka API
  if (!response.ok) {
    throw new Error("Failed to fetch favorite recipes");
  }
  return response.json();
};

// Funkcja do usuwania przepisu z backendu
const deleteFavoriteRecipe = async (id) => {
  const response = await fetch(
    `https://so-yummy-31fabc853d58.herokuapp.com/favorites/favorites${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete favorite recipe");
  }
  return response.json();
};

const FavoritePage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const listRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Pobieranie danych z backendu
    const getFavoriteRecipes = async () => {
      try {
        const data = await fetchFavoriteRecipes();
        setFavoriteRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFavoriteRecipes();
  }, []);

  const onDeleteHandler = async (id) => {
    try {
      await deleteFavoriteRecipe(id);
      // Aktualizowanie stanu po usunięciu
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const viewRecipeHandler = (id) => {
    navigate(
      `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipes/${id}`
    ); // Przekierowanie do strony przepisu
  };

  return (
    <section className={`${styles.section} ${styles.container}`}>
      <div className={styles.title}>Favorites</div>
      {favoriteRecipes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles.list} ref={listRef}>
          {favoriteRecipes.map((recipe) => (
            <div className={styles.recipeCard} key={recipe.id}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className={styles.recipeImage}
              />
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              <p className={styles.recipeDescription}>{recipe.description}</p>
              <button
                className={styles.deleteIcon}
                onClick={() => onDeleteHandler(recipe.id)}
              >
                🗑️
              </button>
              <button
                className={styles.viewRecipeButton}
                onClick={() => viewRecipeHandler(recipe.id)}
              >
                See Recipe
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FavoritePage;
