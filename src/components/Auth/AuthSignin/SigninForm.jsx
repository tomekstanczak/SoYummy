// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.

import styles from "./SigninForm.module.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export const SigninForm = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(INITIAL_STATE);

    try {
      const response = await axios.post(
        "https://so-yummy-31fabc853d58.herokuapp.com/auth/login",
        userData
      );
      const token = response.data.token;

      localStorage.setItem("authToken", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      console.log("ok", response.data);
      setUserData(INITIAL_STATE);
      navigate(`/main`);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Sign In</h2>
      <div className={styles.box}>
        <label className={styles.label}>
          <input
            className={styles.inputs}
            type="email"
            name="email"
            value={userData.email}
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
            value={userData.password}
            placeholder="Password"
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
  );
};
