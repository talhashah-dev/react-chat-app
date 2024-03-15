import React from "react";
import SignupImg from "../assets/images/signup.png"
// import uploadImage from "../assets/images/add_image.png"
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formImage">
          <img src={SignupImg} alt="" />
          <Link to={"/"}>
            <p className="link">
              I am already a member
            </p>
          </Link>
        </div>
        <form>
          <span className="title">Sign up</span>
          <input type="text" placeholder="Name" minLength="2" maxLength="20" required />
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" minLength="6" maxLength="10" required/>
          {/* <label htmlFor="fileInput">
            <img src={uploadImage} />
            <p>Upload Avatar</p>
          </label>
          <input type="file" id="fileInput"/>  */}
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
