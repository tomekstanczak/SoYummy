// Komponent otrzymuje we właściwościach obraz z przepisem oraz tablicę z elementami opisu przygotowania potrawy i renderuje:
// - Opis przygotowania dania;
// - Obraz potrawy z przepisu lub symbol zastępczy, jeśli go nie ma.
// DODATKOWO!!! Jeśli jest więcej niż jeden element opisu gotowania, który jest elementem tablicy i nie ma numeracji tych elementów na początku, to należy dodać taką numerację do każdego elementu i odpowiednio wyrenderować.

import styles from "./RecipePreparation.module.css";

const RecipePreparation = ({ preparationSteps }) => {
  return (
    <div className={styles.preparation}>
      <h2 className={styles.preparationTitle}>Recipe Preparation</h2>
      <ol className={styles.preparationList}>
        {preparationSteps.map((step, index) => (
          <li key={index} className={styles.preparationStep}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <img className={styles.preparationImg} src="" alt="" />
    </div>
  );
};

export default RecipePreparation;
