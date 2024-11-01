// Komponent zawiera stan, który przechowuje wszystkie dane wypełnione przez użytkownika w formularzu.
// Komponent renderuje formularz z użyciem komponentów:
//  - RecipeDescriptionFields
//  - RecipeIngredientsFields
//  - RecipePreparationFields
// Wszystkie pola formularza są wymagane, walidowane i wyświetlają użytkownikowi odpowiednie informacje, jeśli wprowadzona wartość jest nieprawidłowa. Komponent renderuje przycisk Add, który wysyła żądanie utworzenia nowego przepisu z odpowiednimi danymi poprzez przesłanie formularza.
// Po pomyślnym wysłaniu żądania, przepis jest dodawany do listy własnych przepisów użytkownika. Następnie użytkownik powinien zostać przekierowany na stronę MyRecipesPage.
// Po wystąpieniu błędu w żądaniu, użytkownikowi zostanie wyświetlone odpowiednie powiadomienie push.

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import axios from "axios";
import styles from "./AddRecipeForm.module.css";

const AddRecipeForm = ({ isDark }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cookingTime, setCookingTime] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState("");
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://soyummybe.onrender.com/recipes/recipes/category-list"
        );
        const categoryTitles = response.data.data.categories.map(
          (cat) => cat.title
        );
        setCategories(categoryTitles);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "https://soyummybe.onrender.com/ingredients/ingredients/list"
        );
        const ingredientOptions = response.data.data.ingredients.map(
          (ingredient) => ingredient.ttl
        );
        setIngredientOptions(ingredientOptions);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  const unitOptions = ["tbs", "tsp", "kg", "g"];

  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Recipe name is required";
    if (!description) errors.description = "Description is required";
    if (!category) errors.category = "Category is required";
    if (!cookingTime) errors.cookingTime = "Cooking time is required";
    if (!ingredients.length) errors.ingredients = "Ingredients are required";
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

    const data = {
      title: name,
      category: category,
      instructions: preparation,
      time: cookingTime,
      ingredients: ingredients,
      area: description,
    };

    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      await axios.post("https://soyummybe.onrender.com/ownRecipes/", data, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });

      console.log("ok");
      navigate("/main");
    } catch (error) {
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        description={description}
        setDescription={setDescription}
        name={name}
        setName={setName}
        categories={categories}
        category={category}
        setCategory={setCategory}
        cookingTime={cookingTime}
        setCookingTime={setCookingTime}
        setImage={setImage}
        error={errors}
        isDark={isDark}
      />
      <RecipeIngredientsFields
        ingredients={ingredients}
        setIngredients={setIngredients}
        ingredientOptions={ingredientOptions}
        unitOptions={unitOptions}
        error={errors.ingredients}
        isDark={isDark}
      />
      <RecipePreparationFields
        preparation={preparation}
        setPreparation={setPreparation}
        error={errors.preparation}
        isDark={isDark}
      />
      <button
        type="submit"
        className={`${styles.submitButton} ${styles.dark}`}
        onClick={handleSubmit}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
