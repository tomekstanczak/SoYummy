import { Link } from "react-router-dom";
import logo from "../../../assets/icons/formatedIcons/logo.svg";
import styles from "./Logo.module.css";

const Logo = ({ isDark }) => {
  return (
    <div>
      <Link to="/main">
        <svg className={styles.logoIconBox}>
          <use
            href={`${logo}#logo`}
            className={`${styles.logoIcon} ${isDark ? styles.dark : ""} `}
          ></use>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
