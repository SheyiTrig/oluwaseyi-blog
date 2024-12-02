import { useEffect, useState } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
 const {blogData, isPending, error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {blogs && (<BlogList blogs={blogData} title="All Blogs!"/>)}
    
    </div>
  );
};

export default Home;
