// Pole wyszukiwania przepisów według nazwy
// Jeśli pole wyszukiwania jest wypełnione, kliknięcie przycisku Search przekierowuje do strony wyszukiwania SearchPage, wartość wyszukiwania jest przekazywana do tej strony w parametrach paska adresu, a strona SearchPage wysyła żądanie i wyświetla jego wynik. Jeśli w wyniku żądania backend nie zwrócił odpowiednich danych, należy wyświetlić odpowiedni blok informacyjny na ten temat.
// Jeśli w polu wyszukiwania nie ma wartości, przekierowanie nie nastąpi, a użytkownik otrzyma odpowiednie powiadomienie push.
// src/components/Search.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.css";

import mainUnsplash from "../../../assets/images/landingPgUnsplash.png";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.contentContainer}>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleHighlight}>So</span>Yummy
          </h1>
          <p className={styles.description}>
            &quot;What to cook?&quot; is not only a recipe app, it is, in fact,
            your cookbook. You can add your own recipes to save them for the
            future.
          </p>
        </div>

        <div className={styles.searchbarContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <img
        className={styles.unsplashImg}
        src={mainUnsplash}
        alt="plate with vegetables"
      />
    </div>
  );
};

export default Search;
