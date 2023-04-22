import React from 'react'
import Cam from '../img/icons8-cam-64.png'
import Add from '../img/icons8-add-new-30.png'
import More from '../img/icons8-more-24.png'
import { Messages } from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
      <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat