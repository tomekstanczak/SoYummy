import { Route, Routes } from "react-router-dom";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MainPage from "./pages/MainPage/MainPage";
import MyRecipiesPage from "./pages/MyRecipiesPage/MyRecipiesPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SharedLayout from "./pages/SharedLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

import { RecipeProvider } from "./context/RecipeContext";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <RecipeProvider>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="signin" element={<SigninPage />} />

          <Route element={<SharedLayout />}>
            <Route path="main" element={<MainPage />} />
            <Route path="add-recipe" element={<AddRecipePage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="favorites" element={<FavoritePage />} />
            <Route path="my-recipes" element={<MyRecipiesPage />} />
            <Route path="recipe/:recipeId" element={<RecipePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="shopping-list" element={<ShoppingListPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SearchProvider>
    </RecipeProvider>
  );
};

export default App;
