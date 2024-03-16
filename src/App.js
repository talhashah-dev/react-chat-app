import "./styles/styles.scss";
import "./styles/media-query.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />        
        <Route path="/home" element={<Home />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
