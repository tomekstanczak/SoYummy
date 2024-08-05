import { Link } from "react-router-dom";
import logo from "../../../assets/icons/formatedIcons/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/main">
        <img src={logo} alt="Logo" className={styles.logoIcon} />
      </Link>
    </div>
  );
};

export default Logo;
