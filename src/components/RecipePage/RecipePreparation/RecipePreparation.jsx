import styles from "./RecipePreparation.module.css";

const RecipePreparation = ({ preparationSteps }) => {
  // Podziel instrukcje na kroki na podstawie nowej linii
  const stepsArray = preparationSteps.split("\r\n");

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
      {recipe.preview && ( // Użyj preview jako obrazek
        <img
          className={styles.preparationImg}
          src={recipe.preview}
          alt={recipe.title}
        />
      )}
    </div>
  );
};

export default RecipePreparation;