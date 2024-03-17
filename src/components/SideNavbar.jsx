import React from "react";
import { FaMessage , FaUser, FaGear } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";



function SideNavbar() {
  return (
    <div className="sideNavbar">
      <div className="profile">
        <img src="https://wallpapers.com/images/hd/aesthetic-profile-picture-jptwp00h5yjb14wx.jpg" alt="" />
      </div>
      <div className="sections">
          <h2>
            <FaMessage style={{color: "#fff"}} />
          </h2>
          <h2>
            <FaUser style={{color: "#fff"}}/>
          </h2>
      </div>
      <div className="actions">
        <h2>
           <FaGear style={{color: "#fff"}}/>
        </h2>
        <h2>
          <IoIosLogOut style={{color: "#fff"}} />
        </h2>
      </div>
    </div>
  );
}

export default SideNavbar;
