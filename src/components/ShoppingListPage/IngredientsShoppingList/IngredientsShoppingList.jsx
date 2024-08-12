import { useEffect, useContext } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import IngredientItem from "../IngredientItem/IngredientItem";
import styles from "./IngredientsShoppingList.module.css";

const IngredientsShoppingList = () => {
  const { shoppingList, fetchShoppingList, removeFromShoppingList } =
    useContext(RecipeContext);

  useEffect(() => {
    fetchShoppingList();
  }, [fetchShoppingList]);

  const handleRemove = (id) => {
    removeFromShoppingList(id);
  };

  return (
    <div className={styles.shoppingListContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Products</th>
            <th className={styles.header}>Number</th>
            <th className={styles.header}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              onRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsShoppingList;
