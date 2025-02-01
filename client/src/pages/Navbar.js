import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
    const {user} = useAuthContext()
    const {logout} = useLogout()

    const handleClick = () =>{
      logout()
    }
    return (
      <div className="nav">
        <Link to="/"> Home </Link>
        {user && (
          <div>
            <Link to="/create"> New Blog </Link>
            <div>{user.email}</div>
            <button onClick={handleClick}>Logout</button>
            <Link to = "/userblogs"> My Blogs</Link>
          </div>
        )}

        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    );
}
 
export default Navbar;