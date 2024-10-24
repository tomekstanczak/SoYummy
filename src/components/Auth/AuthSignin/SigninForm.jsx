import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthFetch } from "../../../hooks/useAuthFetch.js";
import styles from "./SigninForm.module.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export const SigninForm = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [fetchError, setFetchError] = useState(null);

  const navigate = useNavigate();

  const { fetchData, loading, error } = useAuthFetch();

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setFetchError(null);
    }

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const pUrl = "auth/login";

    try {
      const response = await fetchData(pUrl, userData);

      const token = response.data.data.user.token;

      localStorage.setItem("authToken", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setFetchError(error);
      setUserData(INITIAL_STATE);
      navigate(`/main`);
    } catch (e) {
      setFetchError(e.response?.data?.message || "Login failed");
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
            <use href="/icons/icons.svg#icon-email"></use>
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
            <use href="/icons/icons.svg#icon-lock-02"></use>
          </svg>
        </label>
        {fetchError && <div className={styles.littleInfo}>{fetchError}</div>}
      </div>
      <button className={styles.button} type="submit">
        {loading ? "Logging in..." : "Sign In"}
      </button>
    </form>
  );
};
