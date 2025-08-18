import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  const { user } = useAuthContext();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const blog = {
      title,
      body,
      author,
    };

    const response = await fetch("http://localhost:4000/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      setTitle("");
      setBody("");
      setAuthor("");
      console.log(response);
    }
  };

  return (
    <div className="create">
      <form className="form">
        <h2>Create a New Blog</h2>
        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter an engaging title for your blog"
          required
        />
        <label>Body:</label>
        <textarea
          name="body"
          id="body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          placeholder="Write your blog content here..."
          required
        ></textarea>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          placeholder="Enter author name"
          required
        />
        <button onClick={handleClick}>
          {title || body || author ? "Publish Blog" : "Submit"}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Create;
