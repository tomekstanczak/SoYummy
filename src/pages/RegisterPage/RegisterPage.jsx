// RegisterPage.js

//     Renderuje ścieżkę /register.
//     Zawiera komponent AuthForm.


import registration from '../../assets/images/SigninImg.png'

import styles from './RegisterPage.module.css';

import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/Auth/AuthRegister/RegisterForm';

const RegisterPage = () => {
  return (
      <div className={styles.container}>
          <img
              className={styles.signinImg}
              src={registration}
              alt="lady on couch & mobile menu"
          />
          <RegisterForm />
          <Link className={styles.signIn} to="/signin">
              Sign in
          </Link>
      </div>
  )
}

export default RegisterPage;
