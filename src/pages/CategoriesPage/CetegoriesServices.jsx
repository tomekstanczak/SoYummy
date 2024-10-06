import axios from "axios";

const API_BASE_URL = "https://soyummybe.onrender.com/recipes/recipes";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category-list`);
    return response.data.data.categories;
  } catch (err) {
    throw new Error("Failed to fetch categories");
  }
};

export const fetchRecipes = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data.data.recipes;
  } catch (err) {
    throw new Error("Failed to fetch recipes");
  }
};
