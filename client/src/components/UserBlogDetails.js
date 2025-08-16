import { useState} from "react"
import { useAuthContext } from "../hooks/useAuthContext";


const UserBlogDetails = ({blog}) => {
    const {user} = useAuthContext()

    
    
    const [show, setShow] = useState("show more")
    const [expand, setExpand] = useState(false)
    const [edit, setEdit ] = useState(false)

    const [title, setTitle] = useState(blog.title)
    const [body, setBody] = useState(blog.body)
    const [author, setAuthor] = useState(blog.author)
    const [error, setError] = useState(null)

    const blogPreview = body.substring(0, 400) + "...";
    const [blogBody, setBlogBody] = useState(blogPreview);

    const handleDelete = async() => {
        const response = await fetch('http://localhost:4000/api/blogs/' + blog._id, {
            method: "DELETE",
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
        })

        if(response.ok){
            console.log(response)
        }
    }
    const handleBlogClick = () =>{
        
        if(expand){
            setBlogBody(blogPreview);
            
            
            setShow("show more")
            setExpand(false)
        } else{
            setBlogBody(blog.body);
            setShow('show less')
            setExpand(true)
        }

    }
    const switchToEdit = () =>{
        setEdit(true)
    }
    const handleEdit = async (e) =>{
        e.preventDefault()
        const updateKeys = {title, body, author}
        const response = await fetch('http://localhost:4000/api/blogs/' + blog._id, {
            method: "PATCH",
            body: JSON.stringify(updateKeys),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`

            }
        })
        const json = await response.json()
        if(response.ok){
            console.log(json)
            setBody(json.body);
            setTitle(json.title); 
            setAuthor(json.author);
            setEdit(false)
        }
        if(!response.ok){
            setError(json.error)
        }
    }
    return (
      <div>
        {!edit && (
          <div className="blog-details">
            <div className="blog-title">{title}</div>
            <div className="blog-body">{blogBody}</div>
            <div className="expand" onClick={handleBlogClick}>
              {show}
            </div>

            <div className="blog-author">{blog.author}</div>
            {user && (
              <span className="delete-button" onClick={handleDelete}>
                Delete
              </span>
            )}
            {user && (
              <span className="edit-button" onClick={switchToEdit}>
                Edit
              </span>
            )}
          </div>
        )}
        {edit && (
            <div className="create">
              <form className="form">
                <h2>Edit</h2>
                <label>Title:</label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <label>Body:</label>
                <textarea
                  name="body"
                  id="body"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                ></textarea>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
                <button onClick={handleEdit}>Update</button>
              </form>
              {error && <div>{error}</div>}
            </div>
        )}
      </div>
    );
}
 
export default UserBlogDetails;