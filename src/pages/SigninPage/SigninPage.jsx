import styles from "./SigninPage.module.css";

import { Link } from "react-router-dom";
import { SigninForm } from "../../components/Auth/AuthSignin/SigninForm";

const SigninPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signinImg} />
      <div className={styles.registerSigninContainer}>
        <SigninForm />
        <Link className={styles.registration} to="/register">
          Registration
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
