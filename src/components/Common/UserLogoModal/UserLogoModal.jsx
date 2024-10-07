// Komponent renderuje okno modalne z przyciskami:
// - EditProfile - otwiera komponent UserInfoModal;
// - LogoutBtn - komponent wylogowujący użytkownika.

import { useState, useEffect } from "react";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import styles from "./UserLogoModal.module.css";
import arrowRight from "../../../assets/icons/formatedIcons/arrow-right.svg";
import edit from "../../../assets/icons/formatedIcons/edit-01.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogoModal = ({ onClose, onUserUpdate }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
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
        <div className={styles.userLogoModalContent}>
          <button
            onClick={handleEditProfileClick}
            className={`${styles.userLogoModalButton} ${styles.userEditButton}`}
          >
            Edit Profile <img src={edit} className={styles.editIcon} />
          </button>
          <button
            onClick={handleOpenModalLogoutClick}
            className={`${styles.userLogoModalButton} ${styles.userLogOutButton}`}
          >
            Logout <img src={arrowRight} />
          </button>
        </div>
      </div>
      {isModalLogoutOpen && (
        <div className={styles.backgroundModalLogOut}>
          <div className={styles.logOutMainBox}>
            <button className={styles.exitButton} onClick={onClose}>
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
