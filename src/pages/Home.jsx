import React from 'react'
import SideNavbar from '../components/SideNavbar'
import ChatSidebar from "../components/ChatSidebar"
import ChatBox from '../components/ChatBox'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <SideNavbar />
        <ChatSidebar />
        <ChatBox />
      </div>
    </div>
  )
}

export default Home
