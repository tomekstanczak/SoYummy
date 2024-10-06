// Komponent renderuje blok ze zdjęciem użytkownika oznaczonym jako zawartość lub ikoną, jeśli nie ma takiego zdjęcia, oraz nazwą użytkownika.
// Kliknięcie tego bloku powinno wyrenderować komponent UserLogoModal.
import { useState } from "react";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import styles from "./UserLogo.module.css";
import icon from "../../../assets/icons/formatedIcons/user.svg";

const UserLogo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState();

  const handleUserLogoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUserUpdate = (newUserData) => {
    setUpdatedUser(newUserData);
  };

  const name = updatedUser?.name || user?.name;
  const userIcon = updatedUser?.avatarURL
    ? `https://soyummybe.onrender.com/${updatedUser.avatarURL}`
    : user.avatarURL && user.avatarURL !== ""
    ? `https://soyummybe.onrender.com/${user.avatarURL}`
    : icon;

  console.log(userIcon);

  return (
    <div>
      <div onClick={handleUserLogoClick} className={styles.container}>
        <img src={userIcon} alt="User" className={styles.userIconStyle} />
        <span className={styles.name}>{name}</span>
      </div>
      {isModalOpen && (
        <UserLogoModal
          onClose={handleCloseModal}
          onUserUpdate={handleUserUpdate}
        />
      )}
    </div>
  );
};

export default UserLogo;
