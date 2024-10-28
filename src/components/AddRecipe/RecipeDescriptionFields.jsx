// Komponent renderuje pola do wprowadzania danych przez użytkownika:
// - Pliku ze zdjęciem przepisu;
// - Nazwy przepisu;
// - Opisu przepisu;
// - Kategorii przepisu - wybieranej z listy rozwijanej pochodzącej z backendu;
// - Czasu gotowania przepisu - wybieranego z listy rozwijanej w zakresie od 5 minut do 120 minut w krokach co 5.
// Listy rozwijane powinny wyświetlać 6 wierszy danych, wszystkie inne powinny być przewijane w obrębie listy.
// Komponent poprzez właściwości odbiera wartości dla danych wejściowych, a także uchwyt do przetwarzania tych wartości.

import { useState } from "react";
import styles from "./RecipeDescriptionFields.module.css";
import cameraVector from "../../assets/icons/formatedIcons/photoCameraVector.svg";
import camera from "../../assets/icons/formatedIcons/photoCamera.svg";

const RecipeDescriptionFields = ({
  description,
  setDescription,
  categories,
  cookingTime,
  setCookingTime,
  setImage,
  name,
  setName,
  category,
  setCategory,
  error,
}) => {
  const cookingTimeOptions = [...Array(24).keys()].map((n) => (n + 1) * 5);
  const [recipiePictureURL, setrecipiePictureURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setrecipiePictureURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.fileInputContainer}>
        <label htmlFor="image" className={styles.imageLabel}>
          {!recipiePictureURL ? (
            <div className={styles.fullCameraIcon}>
              <img
                src={cameraVector}
                alt="Camera vector"
                className={styles.cameraVector}
              />
              <img src={camera} alt="Camera icon" className={styles.camera} />
            </div>
          ) : (
            <img
              src={recipiePictureURL}
              alt="Recipe picture"
              className={styles.recipeImage}
            />
          )}
        </label>
        <input
          id="image"
          type="file"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        {error.image && <div className={styles.error}>{error.image}</div>}
      </div>
      <div className={styles.inputsConteiner}>
        <div className={styles.fieldContainer}>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Enter item title"
          />
          {error.name && <div className={styles.error}>{error.name}</div>}
        </div>

        <div className={styles.fieldContainer}>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            placeholder="Enter about recipe"
          />
          {error.description && (
            <div className={styles.error}>{error.description}</div>
          )}
        </div>

        <div className={styles.fieldContainer}>
          <p className={styles.categoryFieldDescription}>Category</p>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            <option value=""></option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {error.category && (
            <div className={styles.error}>{error.category}</div>
          )}
        </div>

        <div className={styles.fieldContainer}>
          <p className={styles.cookingTimeFieldDescription}>Cooking time</p>
          <select
            id="cookingTime"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            className={styles.select}
          >
            <option value=""></option>
            {cookingTimeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time} minutes
              </option>
            ))}
          </select>
          {error.cookingTime && (
            <div className={styles.error}>{error.cookingTime}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
