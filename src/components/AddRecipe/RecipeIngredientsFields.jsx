// Komponent do dodawania składników zawiera:
// - Podtytuł;
// - Licznik liczby określonych składników w przepisie. Przyciski +/- dodają nowe pole wprowadzania danych na końcu listy lub usuwają ostatnie pole.
// - Pole do wprowadzania danych o składnikach, które składa się z:
//      * Nazwy składnika (wybieranej z rozwijanej listy pochodzącej z backendu);
//      * Ilości składnika + miary ilości (wybierane z rozwijanej listy);
//      * Przycisku usuwania, którego kliknięcie powoduje usunięcie ze stanu i strony.

import { useState, useEffect } from "react";
import styles from "./RecipeIngredientsFields.module.css";

const RecipeIngredientsFields = ({
  ingredients,
  setIngredients,
  ingredientOptions,
  unitOptions,
}) => {
  const [localIngredients, setLocalIngredients] = useState(ingredients);

  useEffect(() => {
    setLocalIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  }, [ingredients]);

  const handleAddIngredient = () => {
    setLocalIngredients([
      ...localIngredients,
      { name: "", amount: "", unit: "" },
    ]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = localIngredients.filter((_, i) => i !== index);
    setLocalIngredients(updatedIngredients);
    setIngredients(updatedIngredients); // Update parent state
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = localIngredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setLocalIngredients(updatedIngredients);
    setIngredients(updatedIngredients); // Update parent state
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Ingredients</h2>
      <div className={styles.ingredientsList}>
        {localIngredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientContainer}>
            <select
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              className={styles.select}
            >
              <option value="">Select an ingredient</option>
              {ingredientOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={ingredient.amount}
              onChange={(e) =>
                handleIngredientChange(index, "amount", e.target.value)
              }
              className={styles.input}
              placeholder="Amount"
            />
            <select
              value={ingredient.unit}
              onChange={(e) =>
                handleIngredientChange(index, "unit", e.target.value)
              }
              className={styles.select}
            >
              <option value="">Select unit</option>
              {unitOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              className={styles.removeButton}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredientsFields;
