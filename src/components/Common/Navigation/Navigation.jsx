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

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav>
      <div className={styles.desktopNavMenu}>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Categories
        </NavLink>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Add Recipe
        </NavLink>
        <NavLink
          to="/my-recipes"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          My Recipes
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Favorite
        </NavLink>
        <NavLink
          to="/shopping-list"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Shopping List
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          <svg width="24" height="24">
            <use href={`${searchIcon}#search`}></use>
          </svg>
        </NavLink>
      </div>
      <div className={styles.mobileNavMenu}>
        <div className={styles.nav}>
          <div className={styles.topConteiner}>
            <Logo />
            <button onClick={onClose}>
              <img src={xIcon} alt="Close" />
            </button>
          </div>
          <div className={styles.menu}>
            <NavLink
              to="/categories"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Categories
            </NavLink>
            <NavLink
              to="/add-recipe"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Add Recipe
            </NavLink>
            <NavLink
              to="/my-recipes"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              My Recipes
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Favorite
            </NavLink>
            <NavLink
              to="/shopping-list"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Shopping List
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              <svg width="24" height="24">
                <use href={`${searchIcon}#search`}></use>
              </svg>{" "}
              Search
            </NavLink>
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
