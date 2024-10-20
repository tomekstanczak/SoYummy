import { NavLink } from "react-router-dom";

import css from "./Nav.module.css";

const Nav = ({ isDark }) => {
  return (
    <ul className={`${css.navMenu} ${isDark ? css.dark : ""} `}>
      <li>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""} ${
              isDark ? css.dark : ""
            }`
          }
        >
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""} ${
              isDark ? css.dark : ""
            }`
          }
          to="/search"
        >
          Search
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""} ${
              isDark ? css.dark : ""
            }`
          }
          to="/my-recipes"
        >
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""} ${
              isDark ? css.dark : ""
            }`
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ""} ${
              isDark ? css.dark : ""
            }`
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
