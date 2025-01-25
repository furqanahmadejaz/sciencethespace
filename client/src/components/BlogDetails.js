import { useState, useEffect } from "react"


const BlogDetails = ({blog}) => {
    
    const handleClick = async() => {
        const response = await fetch('http://localhost:4000/api/blogs/' + blog._id, {
            method: "DELETE"
        })

        if(response.ok){
            console.log(response)
        }
    }


    return (  
        <div className="blog-details">
            <div className="blog-title">
                {blog.title}
            </div>
            <div className="blog-body">
                {blog.body}
            </div>
            <div className="blog-author">
                {blog.author}
            </div>
            <span onClick = {handleClick}>Delete Blog</span>
        </div>
    );
}
 
export default BlogDetails;