// SharedLayout.js

// Komponent jest renderowany do ścieżki "/". Zawiera Header i Footer i owija zagnieżdżone ścieżki z odpowiadającymi im stronami.
import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.sharedLayoutWrapper} ${isDark ? styles.dark : ""}`}
    >
      <Header />
      <main className={styles.contentWrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
