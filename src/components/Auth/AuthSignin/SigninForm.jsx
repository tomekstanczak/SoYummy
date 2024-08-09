// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.


import styles from './SigninForm.module.css'
import axios from "axios"
import { useState } from "react"

const INITIAL_STATE = {
    email: '',
    password: '',
}

export const SigninForm = () => {

    const [userData, setUserData] = useState(INITIAL_STATE)

    const onChange = (e) => {
        const { name, value } = e.target
       
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const onSubmit = async (e) => {
    e.preventDefault()

    setUserData(INITIAL_STATE)
    try {
        const response = await axios.post(
            "https://so-yummy-31fabc853d58.herokuapp.com/auth/login",
            userData
        );
        const token = response.data
        console.log("ok", response.data);
        return
    } catch (e) {
        console.log(e.response);
    }
}

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.title}>Sign In</h2>
            <div className={styles.box}>
                <label className={styles.label}>
                    <input
                        className={styles.inputs}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
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
                        value={userData.password}
                        onChange={onChange}
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
    )
}
