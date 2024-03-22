import React, { useState } from "react";
import SignupImg from "../assets/images/signup.png";
// import { FaImage } from "react-icons/fa"
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    try {
      console.log(name, email, password)
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "users/", res.user.uid), {
        uid: res.user.uid,
        name,
        email,
      })
      .then(
        console.log(res),
        e.target[0].value = "",
        e.target[1].value = "",
        e.target[2].value = ""
      )
      .catch((error) => {
        console.log(error)
      });
    
    } catch (error) {
      console.log(error)
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formImage">
          <img src={SignupImg} alt="" />
          <Link to={"/"}>
            <p className="link">I am already a member</p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <span className="title">Sign up</span>
          <input type="text" placeholder="Name" minLength="2" maxLength="20" required />
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            maxLength="10"
            required
          />
          {/* <label htmlFor="imgInput">
            <h2>
              <FaImage />
            </h2>
          </label>
          <input type="file" id="imgInput" style={{ display: "none" }} required /> */}
          <button>Sign Up</button>
          {err && <b style={{color: "red"}}>Error!</b>}
        </form>
      </div>
    </div>
  );
}

export default Register;
