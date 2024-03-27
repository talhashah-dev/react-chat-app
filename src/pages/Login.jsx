import React, { useState } from "react";
import LoginImg from "../assets/images/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setErr(error.message);
        });
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formImage">
          <img src={LoginImg} alt="Login" className="login" />
          <Link to={"/signup"}>
            <p className="link">Create an account</p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <span className="title">Sign in</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>Log in</button>
          {err && <p style={{ color: "red" }}>Something is Wrong!</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
