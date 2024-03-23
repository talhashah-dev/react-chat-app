import React, { useState } from 'react'
import Search from './Search'

function ChatSidebar() {
  const [userProfile, setUserProfile] = useState("");
  return (
    <div className="chatSidebar">
      <Search />
      <div className="userChats">
        <div className="userInfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqmcbwakQ-Mq45NZhYuN5crSHZwfSEGoT3ayrTnUy2iG17oH6l_2Z4f0g2U1DG_S6Nzg&usqp=CAU" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Rehana</div>
          <div className="messageTime">1:10 PM</div>
          <div className="messageText">Hello</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://r2.erweima.ai/imgcompressed/compressed_b41c1b1e0e9feb1695926e3f6d792c6a.webp" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Parsa</div>
          <div className="messageTime">1:15 PM</div>
          <div className="messageText">good job 👍</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://cdn.openart.ai/stable_diffusion/b44dfdae5688c37e1bcfe2c46a7fbeb3b66f84ee_2000x2000.webp" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Ali</div>
          <div className="messageTime">1:15 PM</div>
          <div className="messageText">It's me Ali</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73d_lTJJBdP1kLV2fmTsWhtdc6EiiGFntve81QfeA9w&s" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Milad</div>
          <div className="messageTime">2:15 AM</div>
          <div className="messageText">GM</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://i.pinimg.com/736x/65/28/ab/6528abbb6cd52f5eb81ba4b0553a4b45.jpg" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Hassam</div>
          <div className="messageTime">9:15 AM</div>
          <div className="messageText">Hahahaha 😂😂</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://cdn.openart.ai/stable_diffusion/b44dfdae5688c37e1bcfe2c46a7fbeb3b66f84ee_2000x2000.webp" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Ali</div>
          <div className="messageTime">1:15 PM</div>
          <div className="messageText">It's me Ali</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqmcbwakQ-Mq45NZhYuN5crSHZwfSEGoT3ayrTnUy2iG17oH6l_2Z4f0g2U1DG_S6Nzg&usqp=CAU" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Rehana</div>
          <div className="messageTime">1:10 PM</div>
          <div className="messageText">Hello</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="https://r2.erweima.ai/imgcompressed/compressed_b41c1b1e0e9feb1695926e3f6d792c6a.webp" alt="" className="userProfile" />
          <div className="userDetails">
          <div className="userName">Parsa</div>
          <div className="messageTime">1:15 PM</div>
          <div className="messageText">where are you?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSidebar;
