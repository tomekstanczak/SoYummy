// Komponent renderuje pola do wprowadzania danych przez użytkownika:
// - Pliku ze zdjęciem przepisu;
// - Nazwy przepisu;
// - Opisu przepisu;
// - Kategorii przepisu - wybieranej z listy rozwijanej pochodzącej z backendu;
// - Czasu gotowania przepisu - wybieranego z listy rozwijanej w zakresie od 5 minut do 120 minut w krokach co 5.
// Listy rozwijane powinny wyświetlać 6 wierszy danych, wszystkie inne powinny być przewijane w obrębie listy.
// Komponent poprzez właściwości odbiera wartości dla danych wejściowych, a także uchwyt do przetwarzania tych wartości.

import React from "react";
import styles from "./RecipeDescriptionFields.module.css";

const RecipeDescriptionFields = ({
  image = null,
  setImage = () => {},
  name = "",
  setName = () => {},
  description = "",
  setDescription = () => {},
  category = "",
  setCategory = () => {},
  cookingTime = "",
  setCookingTime = () => {},
  categories = [],
  errors = {},
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.fieldContainer}>
        <label htmlFor="image">Recipe Image:</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className={styles.fileInput}
        />
        {errors.image && <div className={styles.error}>{errors.image}</div>}
      </div>

      <div className={styles.fieldContainer}>
        <label htmlFor="name">Recipe Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </div>

      <div className={styles.fieldContainer}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
        {errors.description && (
          <div className={styles.error}>{errors.description}</div>
        )}
      </div>

      <div className={styles.fieldContainer}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          <option value="">Select a category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className={styles.error}>{errors.category}</div>
        )}
      </div>

      <div className={styles.fieldContainer}>
        <label htmlFor="cookingTime">Cooking Time (minutes):</label>
        <select
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className={styles.select}
        >
          <option value="">Select time</option>
          {[...Array(24).keys()].map((n) => (
            <option key={n} value={(n + 1) * 5}>
              {(n + 1) * 5} minutes
            </option>
          ))}
        </select>
        {errors.cookingTime && (
          <div className={styles.error}>{errors.cookingTime}</div>
        )}
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
