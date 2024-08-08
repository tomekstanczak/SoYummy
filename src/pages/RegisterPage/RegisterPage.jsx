// RegisterPage.js

//     Renderuje ścieżkę /register.
//     Zawiera komponent AuthForm.


import rectangle from '../../assets/images/Rectangle 8970.png'
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
          <img
              className={styles.rectangle}
              src={rectangle}
              alt="bottom black background"
          />
      </div>
  )
}

export default RegisterPage;
