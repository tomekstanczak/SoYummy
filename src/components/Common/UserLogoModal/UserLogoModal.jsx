// Komponent renderuje okno modalne z przyciskami:
// - EditProfile - otwiera komponent UserInfoModal;
// - LogoutBtn - komponent wylogowujący użytkownika.

import { useState } from "react";
import UserInfoModal from "../UserInfoModal";
import styles from "./UserLogoModal.module.css";

const UserLogoModal = ({ onClose }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsUserInfoModalOpen(true);
  };

  const handleLogoutClick = () => {
    //logOut
    console.log("User logged out");
    onClose();
  };

  const handleUserInfoModalClose = () => {
    setIsUserInfoModalOpen(false);
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
            className={styles.userLogoModalButton}
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogoutClick}
            className={styles.userLogoModalButton}
          >
            Logout
          </button>
          {/* <button onClick={onClose} className={styles.userLogoModalButton}>
            X
          </button> */}
        </div>
      </div>
    </>
  );
};

export default UserLogoModal;
