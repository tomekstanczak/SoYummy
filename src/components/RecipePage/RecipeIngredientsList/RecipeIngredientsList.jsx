import { useContext, useState } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import styles from "./RecipeIngredientsList.module.css";

const RecipeIngredientsList = ({ ingredients }) => {
  const {
    ingredients: allIngredients,
    addToShoppingList,
    removeFromShoppingList,
  } = useContext(RecipeContext);

  const initialShoppingListState = ingredients.reduce((acc, ingredient) => {
    acc[ingredient.id] = false;
    return acc;
  }, {});

  const [isInShoppingList, setIsInShoppingList] = useState(
    initialShoppingListState
  );

  const enrichedIngredients = ingredients.map((ingredient) => {
    const matchedIngredient = allIngredients.find(
      (item) => item._id === ingredient.id
    );

    return {
      ...ingredient,
      ...matchedIngredient,
    };
  });

  const handleCheckboxChange = (ingredient) => {
    const ingredientId = ingredient.id;

    if (isInShoppingList[ingredientId]) {
      removeFromShoppingList(ingredient._id);
      setIsInShoppingList((prevState) => ({
        ...prevState,
        [ingredientId]: false,
      }));
    } else {
      addToShoppingList(ingredient);
      setIsInShoppingList((prevState) => ({
        ...prevState,
        [ingredientId]: true,
      }));
    }
  };

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
                  checked={isInShoppingList[ingredient.id] || false}
                  onChange={() => handleCheckboxChange(ingredient)}
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
