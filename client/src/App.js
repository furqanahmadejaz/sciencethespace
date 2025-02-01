import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home"
import Navbar from "./pages/Navbar";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import MyBlogs from "./pages/MyBlogs";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const {user} = useAuthContext()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/userblogs" element={<MyBlogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
