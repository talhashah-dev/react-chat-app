import React from 'react'
import Search from './Search'

function Chats(props) {
  return (
    <div className="chatSidebar">
      <Search />
      <div className="userChats">
        <div className="userInfo">
          <img src={props.photoURL} alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">{props.displayname}</div>
          <div className="messageTime">1:10 PM</div>
          <div className="messageText">Hello</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats;
