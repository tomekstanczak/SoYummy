// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.



import { useState } from "react";
import axios from "axios";
import styles from './RegisterForm.module.css'


const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
        ...prev,
        [name]: value,
    }))
}

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(INITIAL_STATE);
    try {
      const response = await axios.post(
        "https://so-yummy-31fabc853d58.herokuapp.com/auth/signup",
        userData
      );
      console.log("ok", response.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Registration</h2>
      <div className={styles.box}>
        <label className={styles.label}>
          <input
            className={styles.inputs}
            type="text"
            name="name"
            value={userData.name}
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
        Sign up
      </button>
    </form>
  );
};
