import {useState} from "react"
import { useAuthContext } from "../hooks/useAuthContext";


const BlogDetails = ({blog,fetchBlogs}) => {
    const {user} = useAuthContext()

    const blogPreview = blog.body.substring(0, 400) + "...";
    const [blogBody, setBlogBody] = useState(blogPreview)
    const [show, setShow] = useState("show more")
    const [expand, setExpand] = useState(false)

    //comments

    const [newComment, setNewComment] = useState("");
    const [commentDisabled, setCommentDisabled] = useState(false)
 
   


    const handleComment = async () =>{
      setCommentDisabled(true)
      if(!user){
        throw Error("Must be logged in to add comments");
      }

      try{
        const response = await fetch('http://localhost:4000/api/blogs/' + blog._id + '/comments', {
          method: "PATCH",
          body: JSON.stringify({text: newComment}),
          headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${user.token}`
          }
        });
        if(!response.ok){
          throw Error("Unable to post comment")
        }
        fetchBlogs();
        setNewComment("");
        setCommentDisabled(false);
       
      }catch(error){

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
    return (   
      <div className="blog-details">
        <div className="blog-title">{blog.title}</div>
        <div className="blog-body">{blogBody}</div>
        <div className="expand" onClick={handleBlogClick}>
          {show}
        </div>

        <div className="blog-author">{blog.author}</div>
        <div className="add-comment">
          <input type="text" onChange = {(e) =>{setNewComment(e.target.value)}} value={newComment} />
          <button onClick={handleComment} disabled={commentDisabled}>Post Comment</button>
        </div>
        <div className="show-comments">
          {blog.comments && blog.comments.map((comment) => (
            <div className="comment-body" key={comment._id} >
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default BlogDetails;