import React from "react";
import styles from "./MyRecipesList.module.css";
import bin from "../../../public/icons/bin-svgrepo-com.svg";
import img from "../../../public/icons/photoCameraVector.svg";
import imgCamera from "../../../public/icons/photoCamera.svg";

const MyRecipesList = ({ myRecipies, deleteRecipie, handleSeeRecipie }) => {
  const handleBinClick = (id) => deleteRecipie(id);
  const handleSeeRecipieButton = (id) => handleSeeRecipie(id);

  return (
    <>
      <ul className={styles.recipesList}>
        {myRecipies.map((recipe) => (
          <li key={recipe._id} className={styles.recipeMainBox}>
            <button
              onClick={() => {
                handleBinClick(recipe._id);
              }}
              className={styles.binButton}
            >
              <svg className={styles.svgBin}>
                <use href={`${bin}#bin`} className={styles.svgUseBin}></use>
              </svg>
            </button>
            <div className={styles.recipeBox}>
              <div className={styles.imgDiv}>
                <img src={img} className={styles.imgVector} />
                <img src={imgCamera} className={styles.imgCamera} />
              </div>
              <div className={styles.recipeTextBox}>
                <div>
                  <p className={styles.recipeTite}>{recipe.title}</p>
                  <p className={styles.recipeArea}>{recipe.area}</p>
                </div>
                <p className={styles.recipeTime}>{recipe.time}</p>
              </div>
            </div>
            <button
              onClick={() => handleSeeRecipieButton(recipe._id)}
              className={styles.seeRecipeButton}
            >
              <span className={styles.seeRecipeButtonSpan}>See recipe</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyRecipesList;
