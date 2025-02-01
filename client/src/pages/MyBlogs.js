import { useEffect , useState} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserBlogDetails from "../components/UserBlogDetails";

const MyBlogs = () => {
    const {user} = useAuthContext()
    
    const [blogs, setBlogs] = useState(null)

    useEffect(()=>{
        const fetchBlogs = async () =>{
            const response = await fetch('http://localhost:4000/api/userblogs',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            }
                
            )
            const json = await response.json()
            setBlogs(json)
        }
        if(user){
            fetchBlogs();
        }
    })
    return (
      <div className="home">
        <div className="title">Science The Space</div>
        {blogs &&
          blogs.map((blog) => <UserBlogDetails key={blog._id} blog={blog} />)}
      </div>
    );
}
 
export default MyBlogs;