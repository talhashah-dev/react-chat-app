import React from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosAttach } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

function MessageInput() {
  return (
    <div className="messageInput">
      <div className="emoje">
        <HiOutlineEmojiHappy style={{fontSize: "24px", cursor: "pointer", marginRight: "10px"}} />
      </div>
      <div className="inputFeild">
        <input type="text" placeholder="Write a message..." />
      </div>
      <div style={{display: "flex", gap: "10px"}}>
        <div className="attachMents">
          <IoIosAttach style={{fontSize: "24px", cursor: "pointer"}} />
        </div>
        <div className="send">
          <IoIosSend style={{fontSize: "24px", cursor: "pointer"}} />
        </div>
      </div>
    </div>
  );
}

export default MessageInput;
