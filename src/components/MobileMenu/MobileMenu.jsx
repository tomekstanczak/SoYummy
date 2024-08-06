import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./MobileMenu.module.css";

import x from "../../assets/icons/formatedIcons/X.svg";
import toggle from "../../assets/icons/formatedIcons/menu-03.svg";
import logo from "../../assets/icons/formatedIcons/logo.svg";
import search from "../../assets/icons/formatedIcons/search.svg";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.topContainer}>
        <Link to="/main">
          <img className={styles.logo} src={logo} alt="fork and knife" />
        </Link>

        <button className={styles.menuBtn} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img className={styles.menuButtonImg} src={x} alt="close button" />
          ) : (
            <img src={toggle} alt="three lines" />
          )}
        </button>
      </div>
      {isMenuOpen ? (
        <nav className={styles.mobileNav}>
          <ul>
            <li>
              <Link to=" /categories">Categories</Link>
            </li>
            <li>
              <Link to="/add-recipe">Add recipes</Link>
            </li>
            <li>
              <Link to="my-recipes">My recipes</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/shopping-list">Shopping list</Link>
            </li>
            <li className={styles.searchBtn}>
              <img className={styles.searchBtnImg} src={search} alt="" />
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};
export default MobileMenu;
