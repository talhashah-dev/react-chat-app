import React from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import ChatBody from './ChatBody'

function ChatBox() {
  return (
    <div className="chatBox">
        <ChatHeader />
        <ChatBody />
        <MessageInput />
    </div>
  )
}

export default ChatBox
