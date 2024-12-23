import { useContext, useState } from "react";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import styles from "./UserLogo.module.css";
import icon from "/icons/user.svg";
import { ThemeContext } from "../../../context/ThemeContext";

const UserLogo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState();

  const { isDark, headerTextColor } = useContext(ThemeContext);

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

  return (
    <>
      <div>
        <div onClick={handleUserLogoClick} className={styles.container}>
          <img src={userIcon} alt="User" className={styles.userIconStyle} />
          <span
            className={styles.name}
            style={isDark ? { color: headerTextColor } : {}}
          >
            {name}
          </span>
        </div>
        <div className={styles.mainContainer}>
          {isModalOpen && (
            <UserLogoModal
              onClose={handleCloseModal}
              onUserUpdate={handleUserUpdate}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserLogo;
