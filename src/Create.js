import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Create = () => {
    
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    // const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};

            fetch("http://localhost:8000/blogs", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(blog),
            }).then(()=>{
                navigate('/');
            })
    }

    return (
      <div className="create">
        <Navbar />

        <form>
          <h2>Post new blog</h2>
          <label> Blog title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> Body: </label>
          <textarea
            required
            rows={15}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button  onClick={handleSubmit}>Add Blog</button>
        </form>
      </div>
    );
}
 
export default Create;