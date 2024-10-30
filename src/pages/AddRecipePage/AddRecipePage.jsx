// Ułożyć komponenty na stronie AddRecipePage (w wersji na urządzenia mobilne, tablety i komputery stacjonarne):

import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm";
import FollowUs from "../../components/Common/Footer/FollowUs/FollowUs";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";
import styles from "./AddRecipePage.module.css";
import leaf from "../../assets/images/spinach.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const AddRecipePage = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={styles.addRecipeContainer}>
      <div className={styles.titleBox}>
        <MainPageTitle title="Add Recipe" isDark={isDark} />
      </div>
      <div className={styles.formContainer}>
        <AddRecipeForm />
        <div className={styles.followUsPopularContainer}>
          <div className={styles.followUs}>
            <h2
              className={`${styles.followUsTextStyle} ${
                isDark ? styles.dark : ""
              }`}
            >
              Follow Us
            </h2>
            <FollowUs isDark={isDark} />
          </div>
          <div className={styles.popular}>
            <PopularRecipe />
          </div>
        </div>
      </div>
      <img src={leaf} className={styles.leafPicture} />
    </div>
  );
};

export default AddRecipePage;
