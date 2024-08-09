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
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const newPreparation = text
        .split("\n")
        .filter((line) => line.trim() !== "");
      setPreparation(newPreparation);
      setText("");
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="preparation">Recipe Preparation</label>
      <textarea
        id="preparation"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        className={styles.textarea}
        placeholder="Enter preparation steps here..."
      />
    </div>
  );
};

export default RecipePreparationFields;
