import React, { useState } from "react";
import SignupImg from "../assets/images/signup.png";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, "images/rivers.jpg");

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",

        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "user", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
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
          <input type="text" placeholder="Name" minLength="2" maxLength="20" />
          <input type="email" placeholder="Email" />
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            maxLength="10"
          />
          <label htmlFor="imgInput">
            <h2>
              <FaImage />
            </h2>
          </label>
          <input type="file" id="imgInput" style={{ display: "none" }} />
          <button>Sign Up</button>
          {err && <span>There is an Error!</span>}
        </form>
      </div>
    </div>
  );
}

export default Register;
