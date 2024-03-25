import "./styles/styles.scss";
import "./styles/loginSignup.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/"/>
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />        
        <Route path="/home" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
        } />        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
