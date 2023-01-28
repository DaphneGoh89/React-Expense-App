import { useState, useEffect } from "react";

function useFetch(url, requestOptions) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async (url, requestOptions) => {
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return { getData, loading, data, error };
}

export default useFetch;
