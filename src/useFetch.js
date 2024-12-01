import { useState, useEffect } from "react";

const useFetch = async () => {
  const [BlogsData, setBlogsData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogsData(data);
          setisPending(false);
          setError(null);
        })
        .catch((err) => {
          setisPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  // try {
  //   console.log("data");
  //   const response = await fetch("../data/db.json");
  //   if (response.ok) {
  //     const data = await response.json();
  //     setBlogsData(data);
  //   }
  // } catch (error) {
  //   console.log("an error occured");
  //   setError(error);
  // }
};

export default useFetch;
