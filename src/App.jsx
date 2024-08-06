import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import MainPage from "./pages/MainPage/MainPage";
import AddRecipePage from "./pages/AddRecipePage";
import CategoriesPage from "./pages/CategoriesPage";
import FavoritePage from "./pages/FavoritePage";
import MyRecipiesPage from "./pages/MyRecipiesPage";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MobileMenu from "./components/MobileMenu/MobileMenu";

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
        <Route path="my-recipes" element={<MyRecipiesPage />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="shopping-list" element={<ShoppingListPage />} />
        <Route path="mobile" element={<MobileMenu />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
