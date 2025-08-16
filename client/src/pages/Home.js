import BlogDetails from "../components/BlogDetails";
import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";

const Home = () => {
   const [blogs, setBlogs] = useState(null);
   
     const fetchBlogs = async () => {
       const res = await fetch("http://localhost:4000/api/blogs");
       const json = await res.json();
       setBlogs(json);
     };

     useEffect(()=>{
      fetchBlogs();
   
     }, [])
     

    return (
      <div className="home">
        <div className="title">Science The Space</div>
        <SearchBox setBlogs={setBlogs} />
        {blogs &&
          blogs.map((blog) => (
            <BlogDetails key={blog._id} blog={blog} fetchBlogs={fetchBlogs}/>
          ))}
      </div>
    );
}
 
export default Home;