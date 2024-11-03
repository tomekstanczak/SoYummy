import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FavoritePage.module.css";
import EmptyState from "./EmptyState/EmptyState";
import axios from "axios";
import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import { ThemeContext } from "../../context/ThemeContext";
import bin from "/icons/bin-svgrepo-com.svg";
import img from "/icons/photoCameraVector.svg";
import imgCamera from "/icons/photoCamera.svg";

const FavoritePage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const { isDark } = useContext(ThemeContext);

  const fetchFavoriteRecipes = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.get(
      "https://soyummybe.onrender.com/favorite/favorite",
      {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      }
    );

    console.log("toto", response);
    if (!response) {
      throw new Error("Failed to fetch favorite recipes");
    }
    return response.data.data.recipes;
  };

  const deleteFavoriteRecipe = async (id) => {
    console.log("id", id);
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.delete(
      `https://soyummybe.onrender.com/favorite/favorite/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      }
    );
    if (!response) {
      throw new Error("Failed to delete favorite recipe");
    }
    return response;
  };

  useEffect(() => {
    const getFavoriteRecipes = async () => {
      try {
        const data = await fetchFavoriteRecipes();
        console.log("get", data);
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
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const viewRecipeHandler = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className={styles.recipePageBox}>
      <div className={styles.recipePageTitleBox}>
        <MainPageTitle isDark={isDark} title="Favorites" />
      </div>
      {favoriteRecipes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles.list} ref={listRef}>
          <ul className={styles.recipesList}>
            {favoriteRecipes.map((recipe) => (
              <li
                key={recipe._id}
                className={`${styles.recipeMainBox} ${
                  isDark ? styles.dark : ""
                }`}
              >
                <button
                  onClick={() => {
                    onDeleteHandler(recipe._id);
                  }}
                  className={styles.binButton}
                >
                  <svg className={styles.svgBin}>
                    <use href={`${bin}#bin`} className={styles.svgUseBin}></use>
                  </svg>
                </button>
                <div className={styles.recipeBox}>
                  <div className={styles.imgDiv}>
                    {recipe.preview ? (
                      <img
                        src={recipe.preview}
                        alt="Recipe preview"
                        className={styles.recipeImg}
                      />
                    ) : (
                      <div>
                        <img
                          src={img}
                          className={styles.imgVector}
                          alt="Default vector"
                        />
                        <img
                          src={imgCamera}
                          className={styles.imgCamera}
                          alt="Camera icon"
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className={`${styles.recipeTextBox} ${
                      isDark ? styles.dark : ""
                    }`}
                  >
                    <div>
                      <p className={styles.recipeTite}>{recipe.title}</p>
                      <p className={styles.recipeArea}>{recipe.description}</p>
                    </div>
                    <p className={styles.recipeTime}>{recipe.time} min</p>
                  </div>
                </div>
                <button
                  onClick={() => viewRecipeHandler(recipe._id)}
                  className={styles.seeRecipeButton}
                >
                  <span className={styles.seeRecipeButtonSpan}>See recipe</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
