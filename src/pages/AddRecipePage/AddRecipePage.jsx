// Ułożyć komponenty na stronie AddRecipePage (w wersji na urządzenia mobilne, tablety i komputery stacjonarne):

import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm";
import FollowUs from "../../components/FollowUS/FollowUs";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";
import styles from "./AddRecipePage.module.css";
import leaf from "../../assets/images/spinach.png";

const AddRecipePage = () => {
  return (
    <div className={styles.addRecipeContainer}>
      <div className={styles.titleBox}>
        <MainPageTitle title="Add Recipe" />
      </div>
      <div className={styles.formContainer}>
        <AddRecipeForm />
        <div className={styles.followUsPopularContainer}>
          <div className={styles.followUs}>
            <FollowUs />
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
