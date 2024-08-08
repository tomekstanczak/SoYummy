// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.

import styles from './RegisterForm.module.css'

import { useState } from "react"

INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
}

export const RegisterForm = () => {
    
const [userData, setUserData] = useState(INITIAL_STATE)

const onChange = (e) => {
    const { name, value } = e.target

    setUserData((prev) => ({
        ...prev,
        [name]: value,
    }))
}

const onSubmit = (e) => {
    e.preventDefault()

    setUserData(INITIAL_STATE)
}
        return (
            <form className={styles.form} onSubmit={onSubmit}>
                <h2 className={styles.title}>Registration</h2>
                <div className={styles.box}>
                    <label className={styles.label}>
                        <input
                            className={styles.inputs}
                            type="text"
                            name="login"
                            placeholder="Name"
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
        )
    }
