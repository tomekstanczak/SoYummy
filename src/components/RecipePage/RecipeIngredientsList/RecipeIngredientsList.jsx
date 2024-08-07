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
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredientItem}>
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className={styles.ingredientImage}
            />
            <div className={styles.ingredientDetails}>
              <h3>{ingredient.name}</h3>
              {ingredient.description && <p>{ingredient.description}</p>}
              <p>Quantity: {ingredient.quantity}</p>
              <input
                type="checkbox"
                checked={ingredient.isInShoppingList}
                onChange={() => toggleIngredient(ingredient)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredientsList;
