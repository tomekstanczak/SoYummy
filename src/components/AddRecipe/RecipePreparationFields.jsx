// Komponent renderuje element textarea.
// Dane wprowadzone przez użytkownika w tym elemencie powinny zostać zapisane do formularza preparation w tablicy elementów.
// Każdy z elementów będzie zawierał tekst wprowadzony przez użytkownika w nowej linii po naciśnięciu klawisza ENTER w polu tekstowym.
// Jeśli cały tekst został zapisany bez przechodzenia do nowej linii przez ENTER, wówczas w tablicy preparation powinien znajdować się jeden element z tym tekstem.

import React, { useState } from "react";
import styles from "./RecipePreparationFields.module.css";

const RecipePreparationFields = ({ preparation, setPreparation }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    setPreparation(text);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="preparation">
        <h3>Recipe Preparation</h3>
      </label>
      <textarea
        id="preparation"
        value={text}
        onChange={handleTextChange}
        className={styles.textarea}
        placeholder="Enter recipe"
      />
    </div>
  );
};

export default RecipePreparationFields;
