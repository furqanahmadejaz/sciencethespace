import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserBlogDetails from "../components/UserBlogDetails";

const MyBlogs = () => {
  const { user } = useAuthContext();

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:4000/api/userblogs", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      setBlogs(json);
    };
    if (user) {
      fetchBlogs();
    }
  });
  return (
    <div className="home">
      <div className="title">My Blogs</div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "1.2rem",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        Manage and edit your published blogs
      </div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => <UserBlogDetails key={blog._id} blog={blog} />)
      ) : (
        <div className="empty-state">
          <h3>No blogs yet</h3>
          <p>
            Start sharing your thoughts with the world by creating your first
            blog post!
          </p>
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
