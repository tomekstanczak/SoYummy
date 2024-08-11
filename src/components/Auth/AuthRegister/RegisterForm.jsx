// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.
import styles from './RegisterForm.module.css'
import axios from "axios"
import { useState } from "react"
import { ErrorIcon, SecureIcon, WarningIcon } from './RegisterIcons';


const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};
export const RegisterForm = () => {
       const [userData, setUserData] = useState(INITIAL_STATE)
       const [inputError, setInputError] = useState('')
       const [inputWarning, setInputWarning] = useState('')
       const [isSecure, setIsSecure] = useState(false)


    const onChange = (e) => {
        const { name, value } = e.target

        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }))

          setInputError('')
          setInputWarning('')
          setIsSecure(false)
        
        
        
        const hasMinLength = value.length >= 10
        const hasNumber = /\d/.test(value)
        const hasUpperCase = /[A-Z]/.test(value)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)

        if (!hasMinLength) {
            setInputError(
                'Enter a valid password.'
            )
            setIsSecure(false)
        } else if (!hasNumber || !hasUpperCase || !hasSpecialChar) {
            setInputWarning(
                'Your password is little secure.'
            )
            setIsSecure(false)
        } else {
            setIsSecure(true)
        }
       
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        setUserData(INITIAL_STATE)
        try {
            const response = await axios.post(
                'https://so-yummy-31fabc853d58.herokuapp.com/auth/signup',
                userData
            )
            console.log('ok', response.data)
        } catch (e) {
            console.log(e.response)
        }
    }
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.title}>Registration</h2>
            <div className={styles.box}>
                <label className={styles.label}>
                    <input
                        className={styles.inputs}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userData.name}
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
                        value={userData.email}
                        onChange={onChange}
                    />
                    <svg className={styles.svg}>
                        <use href="./src/assets/icons/formatedIcons/icons.svg#icon-email"></use>
                    </svg>
                </label>

                <label
                    className={`styles.label ${
                        inputError ? styles.error : styles.label
                    } ${isSecure ? styles.secure : styles.label}`}
                >
                    <input
                        className={styles.inputs}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={onChange}
                    />
                    <div className={styles.icons}>
                        {inputError ? <ErrorIcon /> : ''}
                        {inputWarning ? <WarningIcon /> : ''}
                        {isSecure ? <SecureIcon /> : ''}
                    </div>
                    <svg className={styles.svg}>
                        <use href="./src/assets/icons/formatedIcons/icons.svg#icon-lock-02"></use>
                    </svg>
                </label>
                {inputError && (
                    <p style={{ color: 'rgba(231, 74, 59, 1)' }}>
                        {inputError}
                    </p>
                )}
                {inputWarning && !inputError && (
                    <p style={{ color: 'rgba(246, 194, 62, 1)' }}>
                        {inputWarning}
                    </p>
                )}
                {isSecure && !inputError && !inputWarning && (
                    <p style={{ color: 'rgba(60, 188, 129, 1)' }}>
                        Password is secure
                    </p>
                )}
            </div>
            <button className={styles.button} type="submit">
                Sign up
            </button>
        </form>
    )
}
