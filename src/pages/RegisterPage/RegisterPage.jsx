// RegisterPage.js

//     Renderuje ścieżkę /register.
//     Zawiera komponent AuthForm.


import rectangle from '../../assets/images/Rectangle 8970.png'
import registration from '../../assets/images/SigninImg.png'

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
      <div className={styles.container}>
          <div>
              <img
                  className={styles.signinImg}
                  src={registration}
                  alt="lady on couch & mobile menu"
              />
          </div>
          <div>
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
                      </label>

                      <label className={styles.label}>
                          <input
                              className={styles.inputs}
                              type="email"
                              name="email"
                              placeholder="Email"
                          />
                      </label>

                      <label className={styles.label}>
                          <input
                              className={styles.inputs}
                              type="password"
                              name="password"
                              placeholder="Password"
                          />
                      </label>
                  </div>
                  <button type="submit">Sign up</button>
              </form>
          </div>
          <img
              className={styles.rectangle}
              src={rectangle}
              alt="bottom black background"
          />
      </div>
  )
}

export default RegisterPage;
