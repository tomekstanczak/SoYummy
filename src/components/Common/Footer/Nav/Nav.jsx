import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={css.navMenu}>
      <li>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""}`
          }
        >
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""}`
          }
          to="/search"
        >
          Search
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""}`
          }
          to="/my-recipes"
        >
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""}`
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""}`
          }
          to="/shopping-list"
        >
          Shopping list
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
