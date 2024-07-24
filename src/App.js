import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import DeleteBlog from "./DeleteBlog";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element ={<Create/>}></Route>
          <Route path='/blogs/:id' element={<DeleteBlog/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
