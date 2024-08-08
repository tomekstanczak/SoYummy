import { Route, Routes } from "react-router-dom";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import CategoriesPage from "./pages/CategoriesPage";
import FavoritePage from "./pages/FavoritePage";
import MainPage from "./pages/MainPage/MainPage";
import MyRecipiesPage from "./pages/MyRecipiesPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SharedLayout from "./pages/SharedLayout";
// 
import ShoppingListPage from "./pages/ShoppingListPage";
import SigninPage from "./pages/SigninPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="signin" element={<SigninPage />} />

      <Route element={<SharedLayout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="add-recipe" element={<AddRecipePage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        {/* <Route path="my-recipes" element={<MyRecipiesPage />} /> */}
        <Route path="recipe/:recipeId" element={<RecipePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="shopping-list" element={<ShoppingListPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
