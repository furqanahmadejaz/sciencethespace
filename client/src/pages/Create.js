import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')


    const handleClick = async(e) =>{
        e.preventDefault()
        const blog = {
            title, body, author
        }

        const response = await fetch('http://localhost:4000/api/blogs',{
            method: "POST",
            body: JSON.stringify(blog),
            headers:{
                "Content-Type" : "application/json"
            }
        })

        if(response.ok){
            setTitle('')
            setBody('')
            setAuthor('')
            console.log(response)
        }

    }

    return (
      <div className="create">
        <form className="form">
          <h2>Create a New Blog</h2>
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
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    );
}
 
export default Create;