// Ułożyć stronę (wersję mobilną, tabletową i desktopową)
// Komponent renderuje:
//  - MainPageTitle - uniwersalny komponent dla tytułu strony;
//  - IngredientsShoppingList;
// Komponent wykonuje żądanie kolekcji składników z listy zakupów, jeśli nie jest ona dostępna w store.

import { useEffect, useContext } from "react";
import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import IngredientsShoppingList from "../../components/ShoppingListPage/IngredientsShoppingList/IngredientsShoppingList";
import { RecipeContext } from "../../context/RecipeContext";
import styles from "./ShoppingListPage.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const ShoppingListPage = () => {
  const { shoppingList, fetchShoppingList } = useContext(RecipeContext);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (shoppingList.length === 0) {
      fetchShoppingList();
    }

    console.log(shoppingList);
  }, [fetchShoppingList]);

  return (
    <div className={styles.container}>
      <MainPageTitle title="Shopping List" isDark={isDark} />

      <IngredientsShoppingList ingredients={shoppingList} />
    </div>
  );
};

export default ShoppingListPage;
