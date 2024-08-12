// Komponent renderuje okno modalne z formularzem zawierającym pola:
// - Dodania/zmiany zdjęcia użytkownika;
// - Zmiany nazwy użytkownika;
// -  Przycisk do wysyłania danych.
// Okno modalne powinno być zamykane:
// - Po kliknięciu na tło;
// - Po naciśnięciu Escape;
// - Po przesłaniu formularza, zaraz po otrzymaniu pomyślnej odpowiedzi.

import { useState, useEffect } from "react";
import styles from "./UserInfoModal.module.css";
import userIcon from "../../../assets/icons/formatedIcons/user.svg";
import edit from "../../../assets/icons/formatedIcons/edit-01.svg";
import plus from "../../../assets/icons/formatedIcons/plus.svg";
import axios from "axios";

const UserInfoModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const [error, setError] = useState(null);

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
    const newUser = { name: username };
    e.preventDefault();
    try {
      const response = await axios.patch(
        "https://so-yummy-31fabc853d58.herokuapp.com/auth//updateUser",
        newUser
      );
      console.log(response.data.data.user.name);
      onClose(response.data.data.user);
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className={styles.modalBackground} onClick={handleBackgroundClick}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <label htmlFor="profilePicture" className={styles.fileInputLabel}>
            <img
              src={profilePictureURL || userIcon}
              alt="User"
              className={styles.userImagine}
            />
            <img src={plus} alt="Plus" className={styles.plusStyle} />
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
              className={styles.nameInput}
            />
            <img src={userIcon} alt="edit" className={styles.userIcon} />
            <img src={edit} alt="edit" className={styles.editIcon} />
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
