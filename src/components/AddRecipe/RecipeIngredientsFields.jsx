// Komponent do dodawania składników zawiera:
// - Podtytuł;
// - Licznik liczby określonych składników w przepisie. Przyciski +/- dodają nowe pole wprowadzania danych na końcu listy lub usuwają ostatnie pole.
// - Pole do wprowadzania danych o składnikach, które składa się z:
//      * Nazwy składnika (wybieranej z rozwijanej listy pochodzącej z backendu);
//      * Ilości składnika + miary ilości (wybierane z rozwijanej listy);
//      * Przycisku usuwania, którego kliknięcie powoduje usunięcie ze stanu i strony.

import { useState, useEffect } from "react";
import styles from "./RecipeIngredientsFields.module.css";
import plus from "../../assets/icons/formatedIcons/plus.svg";
import minus from "../../assets/icons/formatedIcons/Minus.svg";
import cross from "../../assets/icons/formatedIcons/X.svg";

const RecipeIngredientsFields = ({
  ingredients,
  setIngredients,
  ingredientOptions,
  unitOptions,
}) => {
  const [localIngredients, setLocalIngredients] = useState(ingredients);
  const [ingredientCount, setIngredientCount] = useState(1);

  useEffect(() => {
    setLocalIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  }, []);

  const handleAddIngredient = () => {
    setLocalIngredients([
      ...localIngredients,
      { name: "", amount: "", unit: "" },
    ]);
    setIngredientCount(ingredientCount + 1);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = localIngredients.filter((_, i) => i !== index);
    setLocalIngredients(updatedIngredients);
    setIngredients(updatedIngredients);
    setIngredientCount(ingredientCount - 1);
  };

  const handleRemoveLastIngredient = () => {
    if (ingredientCount > 0) {
      const updatedIngredients = localIngredients.slice(0, -1);
      setLocalIngredients(updatedIngredients);
      setIngredients(updatedIngredients);
      setIngredientCount(ingredientCount - 1);
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = localIngredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setLocalIngredients(updatedIngredients);
    console.log(updatedIngredients);
    setIngredients(updatedIngredients);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titlePart}>
        <h2 className={styles.subtitle}>Ingredients</h2>
        <div className={styles.ingredientCounter}>
          <button
            type="button"
            onClick={handleRemoveLastIngredient}
            disabled={ingredientCount === 0}
          >
            <img src={minus} className={styles.counterIcon} />
          </button>
          <span className={styles.counterText}>{ingredientCount}</span>
          <button type="button" onClick={handleAddIngredient}>
            <img src={plus} className={styles.counterIcon} />
          </button>
        </div>
      </div>
      <div className={styles.ingredientsList}>
        {localIngredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientContainer}>
            <select
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              className={styles.selectIngredient}
            >
              <option value=""></option>
              {ingredientOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div>
              <div>
                <input
                  type="number"
                  value={ingredient.amount}
                  onChange={(e) =>
                    handleIngredientChange(index, "amount", e.target.value)
                  }
                  className={styles.inputUnitValue}
                />
                <select
                  value={ingredient.unit}
                  onChange={(e) =>
                    handleIngredientChange(index, "unit", e.target.value)
                  }
                  className={styles.selectUnit}
                >
                  <option value=""></option>
                  {unitOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              className={styles.removeButton}
            >
              <img src={cross} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredientsFields;
