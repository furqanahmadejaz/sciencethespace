import BlogDetails from "../components/BlogDetails";
import { useState, useEffect } from "react";

const Home = () => {
   const [blogs, setBlogs] = useState(null);
   useEffect(() => {
     const fetchBlogs = async () => {
       const res = await fetch("http://localhost:4000/api/blogs");
       const json = await res.json();
       setBlogs(json);
     };
     fetchBlogs();
   });

    return (
      <div className="home">
        <div className="title">Science The Space</div>
        {blogs &&
          blogs.map((blog) => (
            <BlogDetails key={blog._id} blog={blog} />
          ))}
      </div>
    );
}
 
export default Home;