import styles from "./RecipeIngredientsList.module.css";

const RecipeIngredientsList = ({ ingredients, toggleIngredient }) => {
  return (
    <div className={styles.ingredientsList}>
      <table className={styles.ingredientsTable}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Ingredients</th>
            <th>Number</th>
            <th>Add to List</th>
          </tr>
        </thead>
        <tbody className={styles.ingredientListBody}>
          {ingredients.map((ingredient, index) => (
            <tr key={index} className={styles.ingredientRow}>
              <td className={styles.ingredientCell}>
                <img
                  src={ingredient.thumb || "path/to/default/image.png"}
                  alt={ingredient.title}
                  className={styles.ingredientImage}
                />
                <h3 className={styles.ingredientName}>{ingredient.ttl}</h3>
              </td>
              <td className={styles.ingredientCell}>
                <p>{ingredient.measure}</p>
              </td>
              <td className={styles.ingredientCell}>
                <input
                  type="checkbox"
                  checked={ingredient.isInShoppingList || false}
                  onChange={() => toggleIngredient(ingredient)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeIngredientsList;
