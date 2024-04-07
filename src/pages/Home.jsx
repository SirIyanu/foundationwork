import { useState, useEffect } from "react";
import { BlogList } from "../components/BlogList";
import { useFetch } from "../customhook/useFetch";

export const Home = () => {
  // let name = 'mario';
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // USED IN PREVIOUS EXAMPLES VIDEOS 1- 16
  //   [
  //   { title: "My new website", body: "lorem", author: "mario", id: 1 },
  //   { title: "Welcome party", body: "lorem", author: "yoshi", id: 2 },
  //   { title: "Web dev top tips", body: "lorem", author: "mario", id: 3 },
  // ]
  // );

  const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p> */}
    </div>
  );
};
