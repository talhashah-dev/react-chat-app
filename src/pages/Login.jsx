import React from 'react'
import SigninImg from "../assets/images/signin.png"
import { Link } from 'react-router-dom'

function Login() {
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
      <form>
        <span className="title">Sign in</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <div style={{display: "flex", justifyContent: "left", gap: "10px"}}>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
        </div> */}
        <button>Log in</button>
      </form>
    </div>
  </div>
  )
}

export default Login
