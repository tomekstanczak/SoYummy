// RegisterPage.js

//     Renderuje ścieżkę /register.
//     Zawiera komponent AuthForm.


import rectangle from '../../assets/images/Rectangle 8970.png'
import registration from '../../assets/images/SigninImg.png'

import styles from './RegisterPage.module.css';

import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
      <div className={styles.container}>
          <img
              className={styles.signinImg}
              src={registration}
              alt="lady on couch & mobile menu"
          />
          <form className={styles.form}>
              <h2 className={styles.title}>Registration</h2>
              <div className={styles.box}>
                  <label className={styles.label}>
                      <input
                          className={styles.inputs}
                          type="text"
                          name="name"
                          placeholder="Name"
                      />
                      <svg className={styles.svg}>
                          <use href="./src/assets/icons/formatedIcons/icons.svg#icon-user"></use>
                      </svg>
                  </label>

                  <label className={styles.label}>
                      <input
                          className={styles.inputs}
                          type="email"
                          name="email"
                          placeholder="Email"
                      />
                      <svg className={styles.svg}>
                          <use href="./src/assets/icons/formatedIcons/icons.svg#icon-email"></use>
                      </svg>
                  </label>

                  <label className={styles.label}>
                      <input
                          className={styles.inputs}
                          type="password"
                          name="password"
                          placeholder="Password"
                      />
                      <svg className={styles.svg}>
                          <use href="./src/assets/icons/formatedIcons/icons.svg#icon-lock-02"></use>
                      </svg>
                  </label>
              </div>
              <button className={styles.button} type="submit">
                  Sign up
              </button>
          </form>
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
