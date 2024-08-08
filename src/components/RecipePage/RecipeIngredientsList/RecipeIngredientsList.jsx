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
                <img
                  src={ingredient.image || "path/to/default/image.png"} // Użyj domyślnego obrazu
                  alt={ingredient.name}
                  className={styles.ingredientImage}
                />
                <h3 className={styles.ingredientName}>{ingredient.name}</h3>
              </td>
              <div className={styles.NumAndListDescription}>
                <td className={styles.ingredientCell}>
                  <p>{ingredient.measure}</p>{" "}
                  {/* Użyj ingredient.measure zamiast ingredient.quantity */}
                </td>
                <td className={styles.ingredientCell}>
                  <input
                    type="checkbox"
                    checked={ingredient.isInShoppingList || false} // Dodaj domyślną wartość
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
