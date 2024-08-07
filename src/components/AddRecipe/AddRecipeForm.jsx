// Komponent zawiera stan, który przechowuje wszystkie dane wypełnione przez użytkownika w formularzu.
// Komponent renderuje formularz z użyciem komponentów:
//  - RecipeDescriptionFields
//  - RecipeIngredientsFields
//  - RecipePreparationFields
// Wszystkie pola formularza są wymagane, walidowane i wyświetlają użytkownikowi odpowiednie informacje, jeśli wprowadzona wartość jest nieprawidłowa. Komponent renderuje przycisk Add, który wysyła żądanie utworzenia nowego przepisu z odpowiednimi danymi poprzez przesłanie formularza.
// Po pomyślnym wysłaniu żądania, przepis jest dodawany do listy własnych przepisów użytkownika. Następnie użytkownik powinien zostać przekierowany na stronę MyRecipesPage.
// Po wystąpieniu błędu w żądaniu, użytkownikowi zostanie wyświetlone odpowiednie powiadomienie push.

import React, { useState, useEffect } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AddRecipeForm.module.css";

const AddRecipeForm = () => {
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://so-yummy-31fabc853d58.herokuapp.com/recipes/category-list"
        );
        const categoryTitles = response.data.data.categories.map(
          (cat) => cat.title
        );
        console.log(categoryTitles);
        setCategories(categoryTitles);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const ingredientOptions = ["Flour", "Sugar", "Eggs", "Milk"];
  const unitOptions = ["g", "ml", "cups", "pieces"];

  const validate = () => {
    const errors = {};
    if (!description) errors.description = "Description is required";
    if (!ingredients) errors.ingredients = "Ingredients are required";
    if (!preparation)
      errors.preparation = "Preparation instructions are required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Assuming an API function to submit the recipe
      await submitRecipe({ description, ingredients, preparation });

      // Redirect to MyRecipesPage
      navigate("/my-recipes");
    } catch (error) {
      // Display error notification
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        description={description}
        setDescription={setDescription}
        error={errors.description}
        categories={categories}
      />
      <RecipeIngredientsFields
        ingredients={ingredients}
        setIngredients={setIngredients}
        ingredientOptions={ingredientOptions}
        unitOptions={unitOptions}
      />
      <RecipePreparationFields
        preparation={preparation}
        setPreparation={setPreparation}
        error={errors.preparation}
      />
      <button type="submit" className={styles.submitButton}>
        Add Recipe
      </button>
    </form>
  );
};

const submitRecipe = async (recipeData) => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default AddRecipeForm;
