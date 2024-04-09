import React, { useContext, useState } from "react";
import { FaMessage, FaUser, FaGear } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";


function Sidebar() {
  const { currentUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(error)
    }
  };

  return (
    <div className="sideNavbar">
      <div className="profile">
        <div className="userImg">
          <img src={currentUser.photoURL} alt="" />
        </div>
        <div className="userName">
        <p>{currentUser.displayName}</p>
        </div>
      </div>
      <div className="sections">
        <h2>
          <FaMessage style={{ color: "#fff", cursor: "pointer" }} />
        </h2>
        <h2>
          <FaUser style={{ color: "#fff", cursor: "pointer" }} />
        </h2>
      </div>
      <div className="actions">
        <h2>
          <FaGear style={{ color: "#fff", cursor: "pointer" }} />
        </h2>
        <h2 onClick={() => signOut(auth)}>
          <IoIosLogOut style={{ color: "#fff", cursor: "pointer" }} />
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
