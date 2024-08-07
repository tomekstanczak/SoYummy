// SigninPage.js

//     Renderuje ścieżkę /signin.
//     Zawiera komponent AuthForm.


import rectangle from '../../assets/images/Rectangle 8970.png'
import registration from '../../assets/images/SigninImg.png'

import styles from './SigninPage.module.css'


const SigninPage = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.signinImg}
                src={registration}
                alt="lady on couch & mobile menu"
            />
            <form className={styles.form}>
                <h2 className={styles.title}>Sign In</h2>
                <div className={styles.box}>
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
                    Sign In
                </button>
            </form>
            <p className={styles.registration}>Registration</p>
            <img
                className={styles.rectangle}
                src={rectangle}
                alt="bottom black background"
            />
        </div>
    )
}

export default SigninPage;