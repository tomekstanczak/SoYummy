// Należy zaimplementować blok nawigacyjny z następującymi ścieżkami:
//   - /categories/:categoryName - prywatna, przekierowuje do strony CategoriesPage;
//   - /add - prywatna, przekierowuje do strony dodawania przepisu -  AddRecipesPage;
//   - /my - prywatna, przekierowuje do strony z danymi przepisu użytkownika - MyRecipesPage;
//   - /favorite - prywatna, przekierowuje do strony z ulubionymi przepisami - FavoritePage;
//   - /shopping-list - prywatna, przekierowuje do strony z listą zakupów - ShoppingListPage;
//   - /search - prywatna - ikona lupy na makiecie przekierowuje do strony SearchPage z ustawionym na stronie zapytaniem typu wyszukiwania query.
// Bieżąca ścieżka, na której znajduje się użytkownik, powinna być podświetlona jako aktywna strona. W wersjach na tablety i urządzenia mobilne komponent powinien być wyświetlany w hamburger menu.

import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import searchIcon from "../../../assets/icons/formatedIcons/search.svg";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import Logo from "../Logo/Logo";
import xIcon from "../../../assets/icons/formatedIcons/X.svg";
import { useEffect } from "react";

const Navigation = ({ onClose }) => {
  const navigate = useNavigate();

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <nav>
      <div className={styles.desktopNavMenu}>
        <NavLink to="/categories/:categoryName">Categories</NavLink>
        <NavLink to="/add">Add Recipe</NavLink>
        <NavLink to="/my">My Recipesve</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
        <NavLink to="/shopping-list">Shopping List</NavLink>
        <button className={styles.searchButton} onClick={handleSearchClick}>
          <img src={searchIcon} alt="Search" width="24px" />
        </button>
      </div>
      <div className={styles.mobileNavMenu}>
        <div className={styles.nav}>
          <div className={styles.topConteiner}>
            <Logo />
            <button onClick={onClose}>
              <img src={xIcon} />
            </button>
          </div>
          <div className={styles.menu}>
            <NavLink to="/categories/:categoryName">Categories</NavLink>
            <NavLink to="/add">Add Recipe</NavLink>
            <NavLink to="/my">My Recipesve</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
            <NavLink to="/shopping-list">Shopping List</NavLink>
            <button className={styles.searchButton} onClick={handleSearchClick}>
              <img src={searchIcon} alt="Search" width="20px" />
              Search
            </button>
          </div>
          <div className={styles.toggleConteiner}>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
