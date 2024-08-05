// Komponent renderuje blok ze zdjęciem użytkownika oznaczonym jako zawartość lub ikoną, jeśli nie ma takiego zdjęcia, oraz nazwą użytkownika.
// Kliknięcie tego bloku powinno wyrenderować komponent UserLogoModal.
import { useState } from "react";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import userIcon from "../../../assets/icons/formatedIcons/user.svg";
import styles from "./UserLogo.module.css";

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserLogoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleUserLogoClick}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <img src={userIcon} alt="User" className={styles.userIconStyle} />
        <span className={styles.name}>Imie</span>
      </div>
      {isModalOpen && <UserLogoModal onClose={handleCloseModal} />}
    </div>
  );
};

export default UserLogo;
