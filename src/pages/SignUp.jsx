import React, { useState } from "react";
import SignupImg from "../assets/images/signup.webp";
import { FaImage } from "react-icons/fa";
import { Link, useNavigate  } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    let file = e.target[3].files[0];
    
    console.log(name,email,password)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error)
          setErr(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL:downloadURL
            })
          })
          .then(
            (e.target[0].value = ""),
            (e.target[1].value = ""),
            (e.target[2].value = ""),
            navigate("/")
          )
          .catch((error) => {
            console.log("error: ",error);
            console.log("error: ",error.code);
            console.log("error: ",error.message);
          });
        }
      )
      
    } catch (error) {
      console.log(error)
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formImage">
          <img src={SignupImg} alt="Signup" />
          <Link to={"/login"}>
            <p className="link">I am already a member</p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <span className="title">Sign up</span>
          <input
            type="text"
            placeholder="Name"
            minLength="2"
            maxLength="20"
            required
          />
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            maxLength="10"
            required
          />
          <label htmlFor="imgInput" style={{ cursor: "pointer" }}>
            <FaImage style={{ color: "gray", fontSize: "30px" }} />
            <span style={{ color: "gray" }}>Add an Avatar</span>
          </label>
          <input type="file" id="imgInput" accept="image/*" style={{ display: "none" }} />
          <button>Sign Up</button>
          {err}
        </form>
      </div>
    </div>
  );
}

export default Register;
