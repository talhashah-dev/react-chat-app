import React from 'react'
import SigninImg from "../assets/images/signin.png"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";



function Login() {

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      console.log(email , password)
      const res = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User ${user.email} logged in!`)
        navigate("home")
      })
      .catch((error) => {
        console.log(error)
        alert(error)
      });
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="formContainer">
    <div className="formWrapper">
    <div className="formImage"> 
          <img src={SigninImg} alt="" />
          <Link to={"/signup"}>
            <p className="link">
              Create an account
            </p>
          </Link>
        </div>
      <form onSubmit={handleSubmit}>
        <span className="title">Sign in</span>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <span style={{display: "flex", gap: "5px"}}>
        <input type="checkbox"  id="remember" />
        <label htmlFor="remember">Remember me</label>
        </span>
        <button>Log in</button>
      </form>
    </div>
  </div>
  )
}

export default Login
