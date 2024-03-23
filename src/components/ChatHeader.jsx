import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";



function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="userInfo">
        <p className="userName">Rehana</p>
        <p className="userStats">last seen recently</p>
      </div>
      <div className="callAction">
        <FaPhone style={{ fontSize: "22px" }} />
        <FaVideo style={{ fontSize: "22px" }} />
      </div>
    </div>
  );
}

export default ChatHeader;
