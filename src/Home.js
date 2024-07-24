import BlogList from "./BlogList";
import Navbar from "./Navbar";
import useFetch from "./useFetch";


const Home = () => {

    const{data:blogs, error, isPending} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            
            <Navbar/>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
                
            
        </div>
     );
}
 
export default Home;