import { useState, useEffect } from "react";
import styles from "./RecipeIngredientsFields.module.css";
import plus from "/icons/plus.svg";
import minus from "/icons/Minus.svg";
import cross from "/icons/X.svg";

const RecipeIngredientsFields = ({
  ingredients,
  setIngredients,
  ingredientOptions,
  unitOptions,
  isDark,
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
    setIngredients(updatedIngredients);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titlePart}>
        <h2 className={`${styles.subtitle} ${isDark ? styles.dark : ""}`}>
          Ingredients
        </h2>
        <div
          className={`${styles.ingredientCounter} ${isDark ? styles.dark : ""}`}
        >
          <button
            type="button"
            onClick={handleRemoveLastIngredient}
            disabled={ingredientCount === 0}
          >
            {" "}
            <svg
              className={`${styles.counterIcon} ${isDark ? styles.dark : ""}`}
            >
              <use
                href={`${minus}#Minus`}
                className={`${styles.counterIcon} ${isDark ? styles.dark : ""}`}
              ></use>
            </svg>
          </button>
          <span className={styles.counterText}>{ingredientCount}</span>
          <button type="button" onClick={handleAddIngredient}>
            <svg
              className={`${styles.counterIcon} ${isDark ? styles.dark : ""}`}
            >
              <use
                href={`${plus}#plus`}
                className={`${styles.counterIcon} ${isDark ? styles.dark : ""}`}
              ></use>
            </svg>
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
              className={`${styles.selectIngredient} ${
                isDark ? styles.dark : ""
              } `}
            >
              <option
                value=""
                className={`${styles.selectIngredient} ${
                  isDark ? styles.dark : ""
                } `}
              ></option>
              {ingredientOptions.map((option, i) => (
                <option
                  key={i}
                  value={option}
                  className={`${styles.selectIngredient} ${
                    isDark ? styles.dark : ""
                  } `}
                >
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
                  className={`${styles.inputUnitValue} ${
                    isDark ? styles.dark : ""
                  } `}
                />
                <select
                  value={ingredient.unit}
                  onChange={(e) =>
                    handleIngredientChange(index, "unit", e.target.value)
                  }
                  className={`${styles.selectUnit} ${
                    isDark ? styles.dark : ""
                  } `}
                >
                  <option
                    value=""
                    className={`${styles.selectUnitOption} ${
                      isDark ? styles.dark : ""
                    } `}
                  ></option>
                  {unitOptions.map((option, i) => (
                    <option
                      key={i}
                      value={option}
                      className={`${styles.selectUnitOption} ${
                        isDark ? styles.dark : ""
                      } `}
                    >
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
              <svg width="20px" height="20px">
                <use
                  href={`${cross}#X`}
                  className={`${styles.cross} ${isDark ? styles.dark : ""} `}
                ></use>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredientsFields;
