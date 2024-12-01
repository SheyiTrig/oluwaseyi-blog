import { useEffect, useState } from "react";
import BlogList from "./blogList";
// import useFetch from "./useFetch";

const Home = () => {
  //   const [name, setName] = useState("oluwaseyi");
  const [blogsData, setBlogsData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("../data/db.json")
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

    // async function fetchData() {
    //   try {
    //     const response = await fetch("http://localhost:8000/blogs");
    //     if (response.ok) {
    //       setError("");
    //       setisPending(false);
    //       const data = await response.json();
    //       console.log(data);
    //       setBlogsData(data);
    //     }
    //   } catch (error) {
    //     setisPending(false);
    //     console.log("an error occured", error);
    //     setError(error);
    //   }
    // }
    // fetchData();
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogsData.filter((blogs) => blogs.id !== id);
    setBlogsData(newBlogs);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {blogsData && (
        <BlogList
          blogs={blogsData}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "oluwaseyi")} title = "Oluwaseyi's Blogs!"  /> */}
      {/* <button onClick={() => setName("Anuoluwapo")}>change name</button> */}
    </div>
  );
};

export default Home;
