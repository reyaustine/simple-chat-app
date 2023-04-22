import React from 'react'
import Add from "../img/icons8-add-image-30.png"

const Register = () => {
    return (

        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Chat App</span>
                <span className='Title'>Register</span>
                <form>
                    <input type="text" name="" id="" placeholder='Display Name'/>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Upload Avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p> You already have an account? <a href="">Login here</a></p>
            </div>
        
        
        
        </div>
    )
}

export default Register