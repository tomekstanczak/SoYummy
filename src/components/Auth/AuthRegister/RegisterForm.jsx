import styles from "./RegisterForm.module.css";
import axios from "axios";
import { useState } from "react";
import {
  ErrorIcon,
  SecureIcon,
  WarningIcon,
  CorrectIcon,
} from "./RegisterIcons";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [inputError, setInputError] = useState("");
  const [inputWarning, setInputWarning] = useState("");
  const [isSecure, setIsSecure] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [isNotValid, setIsNotValid] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setInputError("");
    setInputWarning("");
    setIsSecure(false);
    setIsValidate(false);
    setIsNotValid("");

    const hasMinLength = value.length >= 5;
    const hasNumber = /\d/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (name === "password") {
      if (!hasMinLength) {
        setInputError("Password needs at least five characters.");
      } else if (!hasNumber || !hasUpperCase || !hasSpecialChar) {
        setInputWarning(
          "Your password is somewhat secure, but could be stronger."
        );
      } else {
        setIsSecure(true);
      }
    }

    if (name === "name") {
      if (hasSpecialChar) {
        setIsValidate(false);
        setIsNotValid(
          "Your name is not allowed to contain special characters."
        );
      } else if (name === "name" && value === "" && !hasSpecialChar) {
        setIsValidate(false);
      } else {
        setIsNotValid(null);
        setIsValidate(true);
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setUserData(INITIAL_STATE);
    try {
      const response = await axios.post(
        "https://so-yummy-31fabc853d58.herokuapp.com/auth/signup",
        userData
      );
      navigate("/signin");
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Registration</h2>
      <div className={styles.box}>
        <label
          htmlFor="name"
          className={`${styles.label} ${isNotValid ? styles.error : ""} ${
            isValidate ? styles.secure : ""
          }`}
        >
          <input
            id="name"
            className={styles.inputs}
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={onChange}
          />
          <div className={styles.icons}>
            {isValidate && !isNotValid && <CorrectIcon />}
            {isNotValid && <ErrorIcon />}
          </div>
          <svg className={styles.svg}>
            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-user"></use>
          </svg>
        </label>
        <label htmlFor="email" className={styles.label}>
          <input
            id="email"
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
          htmlFor="password"
          className={`${styles.label} ${inputError ? styles.error : ""} ${
            isSecure ? styles.secure : ""
          }`}
        >
          <input
            id="password"
            className={styles.inputs}
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={onChange}
          />
          <div className={styles.icons}>
            {inputError && <ErrorIcon />}
            {inputWarning && <WarningIcon />}
            {isSecure && <SecureIcon />}
          </div>
          <svg className={styles.svg}>
            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-lock-02"></use>
          </svg>
        </label>
      </div>
      <button className={styles.button} type="submit">
        Sign up
      </button>
    </form>
  );
};
