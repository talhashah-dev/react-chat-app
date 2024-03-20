import React from "react";
import ChatHeader from "./ChatHeader";
import Input from "./Input";
import MessageBox from "./MessageBox";

function ChatBox() {
  return (
    <div className="chatBox">
      <ChatHeader />
      <MessageBox />
      <Input />
    </div>
  );
}

export default ChatBox;
