import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";


const BlogDetails = ({blog}) => {
    const {user} = useAuthContext()

    const blogPreview = blog.body.substring(0, 400) + "...";
    const [blogBody, setBlogBody] = useState(blogPreview)
    const [show, setShow] = useState("show more")
    const [expand, setExpand] = useState(false)

   
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
      </div>
    );
}
 
export default BlogDetails;