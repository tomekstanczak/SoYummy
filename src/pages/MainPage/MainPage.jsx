// Komponent renderuje do ścieżki /main.
// Ułożyć stronę główną (wersje na urządzenia mobilne, tablety i komputery stacjonarne), na której powinny znajdować się kontenery bloków:
//  - СhooseYourBreakfast
//  - Search
//  - PreviewCategories

import ChooseYourBreakfast from "../../components/Main/ChoseYourBreakfast/ChooseYourBreakfasts";
import Search from "../../components/Main/Search/Search";
import PreviewCategories from "../../components/Main/PreviewCategories/PreviewCategories";

import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <ChooseYourBreakfast />
      <Search />
      <PreviewCategories />
    </div>
  );
};

export default MainPage;
