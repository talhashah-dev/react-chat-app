import React from "react";
import { IoIosSend } from "react-icons/io";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Write a message..." />
      <div className="send">
        <IoIosSend style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Input;
