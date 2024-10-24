import { useState, useEffect, useContext } from "react";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import styles from "./UserLogoModal.module.css";
import arrowRight from "/icons/arrow-right.svg";
import edit from "/icons/edit-01.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const UserLogoModal = ({ onClose, onUserUpdate }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);

  const { isDark } = useContext(ThemeContext);

  const navigate = useNavigate();

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

  const handleEditProfileClick = () => {
    setIsUserInfoModalOpen(true);
  };

  const handleOpenModalLogoutClick = () => {
    setIsModalLogoutOpen(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    navigate(`/`);
  };

  const handleUserInfoModalClose = (updatedUser = null) => {
    setIsUserInfoModalOpen(false);
    if (updatedUser) {
      onUserUpdate(updatedUser);
    }
    onClose();
  };

  return (
    <>
      {isUserInfoModalOpen && (
        <UserInfoModal onClose={handleUserInfoModalClose} />
      )}
      <div className={styles.userLogoModal}>
        <div
          className={`${styles.userLogoModalContent} ${
            isDark ? styles.dark : ""
          }`}
        >
          <button
            onClick={handleEditProfileClick}
            className={`${styles.userLogoModalButton} ${
              styles.userEditButton
            } ${isDark ? styles.dark : ""}`}
          >
            Edit Profile{" "}
            <svg width="14px" height="14px">
              <use href={`${edit}#edit-01`}></use>
            </svg>
          </button>
          <button
            onClick={handleOpenModalLogoutClick}
            className={`${styles.userLogoModalButton} ${styles.userLogOutButton}`}
          >
            Logout{" "}
            <svg width="18px" height="18px">
              <use href={`${arrowRight}#arrow-right`}></use>
            </svg>
          </button>
        </div>
      </div>
      {isModalLogoutOpen && (
        <div className={styles.backgroundModalLogOut}>
          <div
            className={`${styles.logOutMainBox} ${isDark ? styles.dark : ""}`}
          >
            <button
              className={`${styles.exitButton} ${isDark ? styles.dark : ""}`}
              onClick={onClose}
            >
              X
            </button>
            <p>Are you sure you want to log out?</p>
            <div className={styles.lcButtons}>
              <button
                className={styles.logoutButton}
                onClick={handleLogoutClick}
              >
                Log out
              </button>
              <button className={styles.cancelButton} onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserLogoModal;
