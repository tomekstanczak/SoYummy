import React, { useState } from "react";
import styles from "./RecipePreparationFields.module.css";

const RecipePreparationFields = ({ preparation, setPreparation, isDark }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    setPreparation(text);
  };

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ""} `}>
      <label htmlFor="preparation">
        <h3>Recipe Preparation</h3>
      </label>
      <textarea
        id="preparation"
        value={text}
        onChange={handleTextChange}
        className={`${styles.textarea} ${isDark ? styles.dark : ""} `}
        placeholder="Enter recipe"
      />
    </div>
  );
};

export default RecipePreparationFields;
