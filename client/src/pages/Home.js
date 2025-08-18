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

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="title">Science The Space</div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "1.2rem",
          color: "rgba(255, 255, 255, 0.8)",
          fontStyle: "italic",
        }}
      >
        Exploring the wonders of science and space
      </div>
      <SearchBox setBlogs={setBlogs} />
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogDetails key={blog._id} blog={blog} fetchBlogs={fetchBlogs} />
        ))
      ) : (
        <div className="empty-state">
          <h3>No blogs found</h3>
          <p>Be the first to share some amazing science content!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
