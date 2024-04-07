import { useState, useEffect } from "react";
export const useFetch = (url) => {
  // changed const [blogs, setBlogs] = useState(null) TO const [data, setData] so it can be more reuseable

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};
