import React from 'react'
import Add from "../img/icons8-add-image-30.png"

const Login = () => {
    return (

        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Chat App</span>
                <span className='Title'>Login</span>
                <form>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    
                    <button>Sign In</button>
                </form>
                <p> You don't have an account? <a href="">Register here</a></p>
            </div>
        
        
        
        </div>
    )
}

export default Login