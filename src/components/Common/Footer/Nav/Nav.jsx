import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={css.navMenu}>
      <li>
        <NavLink className={css.navLink} to="/add" activeClassName={css.navActive}>
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/search" activeClassName={css.navActive}>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/my" activeClassName={css.navActive}>
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/favorite" activeClassName={css.navActive}>
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/shopping-list" activeClassName={css.navActive}>
          Shopping list
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;