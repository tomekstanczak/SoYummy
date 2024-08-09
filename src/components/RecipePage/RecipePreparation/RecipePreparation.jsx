import { useContext } from "react";
import { RecipeContext } from "../../../context/RecipeContext";

import styles from "./RecipePreparation.module.css";

const RecipePreparation = ({ preparationSteps }) => {
  const { recipe } = useContext(RecipeContext);

  const stepsArray =
    typeof preparationSteps === "string" ? preparationSteps.split("\r\n") : [];

  return (
    <div className={styles.preparation}>
      <h2 className={styles.preparationTitle}>Recipe Preparation</h2>
      <ol className={styles.preparationList}>
        {stepsArray.map((step, index) => (
          <li key={index} className={styles.preparationStep}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      {recipe.preview && (
        <img
          className={styles.preparationImg}
          src={recipe.thumb}
          alt={recipe.title}
        />
      )}
    </div>
  );
};

export default RecipePreparation;
