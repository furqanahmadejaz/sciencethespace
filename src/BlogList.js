import { useNavigate } from "react-router-dom";



const BlogList = ({blogs, title}) => {
    const navigate = useNavigate();

    return (
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="content">
            {blog && (
              <div className="blog-content" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>Written by {blog.author}</p>
                <button onClick={()=>navigate('/blogs/' + blog.id)}>delete</button>
              </div>
            )}
          </div>
        ))}
        
      </div>
    );
}
 
export default BlogList;