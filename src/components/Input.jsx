import React from "react";
import { VscSend } from "react-icons/vsc";


function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Write a message..." />
      <div className="send">
        <VscSend style={{ fontSize: "22px", cursor: "pointer"}} />
      </div>
    </div>
  );
}

export default Input;
