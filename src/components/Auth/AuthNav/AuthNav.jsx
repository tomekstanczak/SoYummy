// Komponent renderuje blok nawigacyjny ze ścieżkami:
//   - /register - z ograniczeniami publicznymi, przekierowuje do strony RegisterPage;
//   - /signin - z ograniczeniami publicznymi, przekierowuje do strony SigninPage;

import { Link } from "react-router-dom";

import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={styles.authNavContainer}>
      <Link className={styles.authNavRegister} to="/register">
        Registration
      </Link>
      <Link className={styles.authNavSignIn} to="/signin">
        Sign In
      </Link>
    </div>
  );
};

export default AuthNav;
