import styles from "./IngredientItem.module.css";

const IngredientItem = ({ ingredient, onRemove }) => {
  return (
    <tr className={styles.itemRow}>
      <td className={styles.product}>
        <img
          src={ingredient.thb || "path/to/default/image.png"}
          alt={ingredient.ttl}
          className={styles.productImage}
        />
        <span>{ingredient.ttl}</span>
      </td>
      <td className={styles.quantity}>
        <span>{ingredient.t}</span>
      </td>
      <td className={styles.remove}>
        <button
          onClick={() => onRemove(ingredient._id)}
          className={styles.removeButton}
        >
          &times;
        </button>
      </td>
    </tr>
  );
};

export default IngredientItem;
