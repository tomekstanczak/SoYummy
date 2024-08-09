import { useContext } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import styles from "./RecipeIngredientsList.module.css";

const RecipeIngredientsList = ({ ingredients, toggleIngredient }) => {
  const { ingredients: allIngredients } = useContext(RecipeContext);

  const enrichedIngredients = ingredients.map((ingredient) => {
    const matchedIngredient = allIngredients.find(
      (item) => item._id === ingredient.id
    );

    return {
      ...ingredient,
      ...matchedIngredient,
    };
  });

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
          {enrichedIngredients.map((ingredient, index) => (
            <tr key={index} className={styles.ingredientRow}>
              <td className={styles.ingredientCell}>
                <img
                  src={ingredient.thb || "path/to/default/image.png"}
                  alt={ingredient.ttl}
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
