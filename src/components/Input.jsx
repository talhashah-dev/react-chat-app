import React from "react";
import { IoIosAttach } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Write a message..." />
      <div className="send">
        {/* <label htmlFor="attachment">
        <IoIosAttach style={{ fontSize: "24px", cursor: "pointer" }} />
        </label>
        <input type="file" id="attachment" /> */}
        <IoIosSend style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Input;
