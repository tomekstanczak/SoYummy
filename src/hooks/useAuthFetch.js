import { useState } from "react";
import axios from "axios";

const baseUrl = "https://soyummybe.onrender.com/";

export const useAuthFetch = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchData = async (pathUrl, data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}${pathUrl}`, data);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err.response ? err.response.data.message : "Network Error");
      setLoading(false);
      throw err;
    }
  };

  return { fetchData, loading, error };
};
