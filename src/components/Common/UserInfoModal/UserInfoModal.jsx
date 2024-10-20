// Komponent renderuje okno modalne z formularzem zawierającym pola:
// - Dodania/zmiany zdjęcia użytkownika;
// - Zmiany nazwy użytkownika;
// -  Przycisk do wysyłania danych.
// Okno modalne powinno być zamykane:
// - Po kliknięciu na tło;
// - Po naciśnięciu Escape;
// - Po przesłaniu formularza, zaraz po otrzymaniu pomyślnej odpowiedzi.

import { useState, useEffect, useContext } from "react";
import styles from "./UserInfoModal.module.css";
import userIcon from "../../../assets/icons/formatedIcons/user.svg";
import edit from "../../../assets/icons/formatedIcons/edit-01.svg";
import plus from "../../../assets/icons/formatedIcons/plus.svg";
import axios from "axios";
import { ThemeContext } from "../../../context/ThemeContext";

const UserInfoModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const [error, setError] = useState(null);

  const { isDark } = useContext(ThemeContext);

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setProfilePictureURL(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (username) {
      formData.append("name", username);
    }

    if (profilePicture) {
      formData.append("avatar", profilePicture);
    }
    try {
      const response = await axios.patch(
        "https://soyummybe.onrender.com/auth/updateUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onClose(response.data.data.user);
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className={styles.modalBackground} onClick={handleBackgroundClick}>
      <div className={`${styles.modalContent} ${isDark ? styles.dark : ""}`}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <label htmlFor="profilePicture" className={styles.fileInputLabel}>
            <img
              src={profilePictureURL || userIcon}
              alt="User"
              className={styles.userImagine}
            />
            <svg className={styles.plusStyle} width="18px" height="18px">
              <use
                href={`${plus}#plus`}
                className={`${styles.plusSVG} ${isDark ? styles.dark : ""}`}
              ></use>
            </svg>
          </label>
          <input
            id="profilePicture"
            type="file"
            onChange={handleProfilePictureChange}
            className={styles.fileInput}
          />
          <label className={styles.nameInputLabel}>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className={`${styles.nameInput} ${isDark ? styles.dark : ""}`}
            />
            <svg className={styles.iconUser}>
              <use
                href={`${userIcon}#user`}
                className={`${styles.userIconSvg} ${isDark ? styles.dark : ""}`}
                y="-10px"
              ></use>
            </svg>
            <svg className={styles.editIcon}>
              <use
                href={`${edit}#edit-01`}
                className={`${styles.editIcon} ${isDark ? styles.dark : ""}`}
              ></use>
            </svg>
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.saveButton}>
            Save changes
          </button>
        </form>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
      </div>
    </div>
  );
};

export default UserInfoModal;
