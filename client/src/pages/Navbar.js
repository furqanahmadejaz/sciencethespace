import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="nav">
        
        <Link to="/"> Home </Link>
        <Link to="/create"> New Blog </Link>
      </div>
    );
}
 
export default Navbar;