// - Paginator - komponent do przełączania między stronami.

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
import MyRecipesList from "../../components/MyRecipies/MyRecipesList.jsx";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./MyRecipiesPage.module.css";

const MyRecipiesPage = () => {
  const [myRecipies, setMyRecipies] = useState([]);
  const { isDark, setHeaderTextColor } = useContext(ThemeContext);

  const navigate = useNavigate();

  useEffect(() => {
    setHeaderTextColor("white");

    const fetchRecipies = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Brak tokenu autoryzacyjnego.");
        return;
      }

      try {
        const response = await axios.get(
          "https://soyummybe.onrender.com/ownRecipes",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMyRecipies(response.data);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipies();
  }, []);

  const deleteRecipie = async (id) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Brak tokenu autoryzacyjnego.");
      return;
    }
    try {
      const response = await axios.delete(
        `https://soyummybe.onrender.com/ownRecipes/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setMyRecipies((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeeRecipie = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className={styles.recipePageBox}>
      <div className={styles.recipePageTitleBox}>
        <MainPageTitle isDark={isDark} title="My recipes" />
      </div>
      <MyRecipesList
        isDark={isDark}
        myRecipies={myRecipies}
        deleteRecipie={deleteRecipie}
        handleSeeRecipie={handleSeeRecipie}
      />
    </div>
  );
};

export default MyRecipiesPage;
