import React from 'react'
import UploadImg from '../img/icons8-add-image-30.png'
import AttachFile from '../img/icons8-attach-50.png'

function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Your message...' />
        <div className="send">
            <img src={AttachFile} alt="" />
            <input type="file" style={{display:"none"}} name="" id="file" />
            <label htmlFor="file">
                <img src={UploadImg} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input