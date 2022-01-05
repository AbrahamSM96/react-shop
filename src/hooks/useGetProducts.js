import { useEffect, useState } from "react";

const useGetProducst = (API) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoad(true);
    setError(null);
    await fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setLoad(false), setProducts(data), setError(null);
      })
      .catch((err) => {
        setLoad(false), setError(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return { products, load, error };
};

export default useGetProducst;
