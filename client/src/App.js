import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home"
import Navbar from "./pages/Navbar";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
