import styles from "./IngredientItem.module.css";

const IngredientItem = ({ ingredient, onRemove }) => {
  return (
    <tr className={styles.itemRow}>
      <td className={styles.product}>
        <img
          src={ingredient.image || "path/to/default/image.png"}
          alt={ingredient.name}
          className={styles.productImage}
        />
        <span>{ingredient.name}</span>
      </td>
      <td className={styles.quantity}>
        <span>{ingredient.quantity}</span>
      </td>
      <td className={styles.remove}>
        <button
          onClick={() => onRemove(ingredient.id)}
          className={styles.removeButton}
        >
          &times;
        </button>
      </td>
    </tr>
  );
};

export default IngredientItem;
