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
                  <label>
                      Name
                       <input
                         type="text"
                         name="name" />
                       </label>

                  <label>
                      Email
                        <input
              type="email"
              name="Email" />
                  </label>

                  <label>
                      Password
            <input
              type="password"
              name="Password" />
            
                  </label>
                  <button type="submit">
                      Sign up
                  </button>
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
