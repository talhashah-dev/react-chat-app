import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from "../components/Chats"
import ChatBox from '../components/ChatBox'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chats />
        <ChatBox />
      </div>
    </div>
  )
}

export default Home
