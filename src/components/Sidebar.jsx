import React, { useContext } from "react";
import { FaMessage , FaUser, FaGear } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";



function Sidebar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="sideNavbar">
      <div className="profile">
        <img src={currentUser.photoURL} alt="" />
      </div>
      <div className="sections">
          <h2>
            <FaMessage style={{color: "#fff", cursor:"pointer"}} />
          </h2>
          <h2>
            <FaUser style={{color: "#fff", cursor:"pointer"}}/>
          </h2>
      </div>
      <div className="actions">
        <h2>
           <FaGear style={{color: "#fff", cursor:"pointer"}}/>
        </h2>
        <h2 onClick={() => signOut(auth)}>
          <IoIosLogOut style={{color: "#fff", cursor:"pointer"}} />
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
