// WelcomePage.js

//     Renderuje komponent AuthNav z nawigacją dla nieautoryzowanych użytkowników do RegisterPage i SigninPage.

import AuthNav from "../../components/Auth/AuthNav/AuthNav";

import styles from "./WelcomePage.module.css";

import logo from "/icons/logo.svg";

const WelcomePage = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeGreeting}>
        <img
          className={styles.welcomeLogo}
          src={logo}
          alt="fork & knife at green screen"
        />
        <div className={styles.welcomeDescriptionContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to the app!</h1>
          <p className={styles.welcomeDescription}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
        </div>
        <AuthNav />
      </div>
    </div>
  );
};

export default WelcomePage;
