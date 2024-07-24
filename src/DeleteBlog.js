import { useNavigate, useParams } from "react-router-dom";



const DeleteBlog = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch("http://localhost:8000/blogs/" + id,{
            method: "DELETE"
        }).then(()=>{
            navigate('/');
        });
    }
            
    return (
      <div className="delete">
        <h3>Do you want to delete this blog?</h3>
        <div className="buttons">
          <button onClick={handleDelete} id="yes">Yes</button>
          <button onClick={() => navigate("/")} id="no">No</button>
        </div>
      </div>
    );
}

export default DeleteBlog;