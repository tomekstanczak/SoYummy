import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import searchIcon from "../../../assets/icons/formatedIcons/search.svg";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import Logo from "../Logo/Logo";
import xIcon from "../../../assets/icons/formatedIcons/X.svg";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Navigation = ({ onClose }) => {
  const { isDark } = useContext(ThemeContext);

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
      <div className={`${styles.desktopNavMenu} ${isDark ? styles.dark : ""}`}>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          Add Recipe
        </NavLink>
        <NavLink
          to="/my-recipes"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          My Recipes
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          Favorite
        </NavLink>
        <NavLink
          to="/shopping-list"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          Shopping List
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `${styles.navL}${isActive ? styles.activeLink : ""}`
          }
        >
          <svg width="24" height="24">
            <use href={`${searchIcon}#search`}></use>
          </svg>
        </NavLink>
      </div>
      <div className={styles.mobileNavMenu}>
        <div className={`${styles.nav} ${isDark ? styles.dark : ""}`}>
          <div className={styles.topConteiner}>
            <Logo />
            <button onClick={onClose}>
              <svg alt="Close" width="32px" height="32px">
                <use
                  href={`${xIcon}#X`}
                  onClick={onClose}
                  className={`${styles.onCloseBtn} ${
                    isDark ? styles.darkOnClose : ""
                  }`}
                ></use>
              </svg>
            </button>
          </div>
          <div className={`${styles.menu} ${isDark ? styles.dark : ""}`}>
            <NavLink
              to="/categories"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/add-recipe"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              Add Recipe
            </NavLink>
            <NavLink
              to="/my-recipes"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              My Recipes
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              Favorite
            </NavLink>
            <NavLink
              to="/shopping-list"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              Shopping List
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${styles.navL}${isActive ? styles.activeLink : ""}`
              }
            >
              <svg width="24" height="24" className={styles.searchIcon}>
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
