// Komponent otrzymuje kolekcję danych składników receptury jako właściwości, których używa do renderowania listy odpowiednich elementów.
// Każdy element na liście renderuje:
//  - Obraz składnika lub odpowiadający mu symbol zastępczy;
//  - Tytuł z nazwą składnika;
//  - Opis składnika, jeśli istnieje;
//  - Ilość;
//  - Pole wyboru - kliknięcie pola wyboru powoduje wykonanie żądania do backendu i dodanie składnika oraz jego ilości do listy zakupów, po czym w polu wyboru pojawia się znacznik wyboru.

import styles from "./RecipeIngredientsList.module.css";

const RecipeIngredientsList = ({ ingredients, toggleIngredient }) => {
  return (
    <div className={styles.ingredientsList}>
      <table className={styles.ingredientsTable}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Ingredients</th>
            <div className={styles.NumAndList}>
              <th>Number</th>
              <th>Add to List</th>
            </div>
          </tr>
        </thead>
        <tbody className={styles.ingredientListBody}>
          {ingredients.map((ingredient, index) => (
            <tr key={index} className={styles.ingredientRow}>
              <td className={styles.ingredientCell}>
                {/* <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className={styles.ingredientImage}
                /> */}
                {/* <div className={styles.ingredientDetails}> */}
                <h3 className={styles.ingredientName}>{ingredient.name}</h3>
                {/* {ingredient.description && <p>{ingredient.description}</p>} */}
                {/* </div> */}
              </td>
              <div className={styles.NumAndListDescription}>
                <td className={styles.ingredientCell}>
                  <p>{ingredient.quantity}</p>
                </td>
                <td className={styles.ingredientCell}>
                  <input
                    type="checkbox"
                    checked={ingredient.isInShoppingList}
                    onChange={() => toggleIngredient(ingredient)}
                  />
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeIngredientsList;
