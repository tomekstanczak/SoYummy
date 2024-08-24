import styles from "./RegisterPage.module.css";

import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Auth/AuthRegister/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signinImg} />
      <div className={styles.registerSigninContainer}>
        <RegisterForm />
        <Link className={styles.signIn} to="/signin">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
