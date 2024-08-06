// Komponent Header renderuje:
//   - Logo - przekierowuje użytkownika na stronę główną;
//   - Navigation - nawigacja autoryzowanego użytkownika;
//   - UserLogo - przycisk otwierający okno modalne edytujące dane użytkownika;
//   - ThemeToggler - komponent do przełączania motywu.

// *W wersji mobilnej blok nawigacyjny i przełącznik motywu są otwierane za pomocą hamburger menu, które wyskakuje z góry i jest na całej wysokości urządzenia użytkownika.
import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.desktopMenu}>
        <Logo />
        <Navigation />
        <div className={styles.userTogglerContainer}>
          <UserLogo />
          <ThemeToggler />
        </div>
      </div>
      <div className={styles.mobileMenu}>
        <Logo />
        <div className={styles.userMenuContainer}>
          <UserLogo />
          {isMenuOpen && (
            <div className={styles.mobileMenuContent}>
              <Navigation onClose={handleCloseMenu} />
            </div>
          )}
          <button className={styles.hamburger} onClick={handleMenuToggle}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
