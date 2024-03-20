import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="userInfo">
        <h2 className="userName">Rehana</h2>
        <p className="userStats">Online</p>
      </div>
      <div className="callAction">
        <IoIosVideocam style={{ fontSize: "26px" }} />
        <IoCallSharp style={{ fontSize: "22px" }} />
      </div>
    </div>
  );
}

export default ChatHeader;
