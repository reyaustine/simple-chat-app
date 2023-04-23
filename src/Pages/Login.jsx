import React, { useState } from 'react'
import Add from "../img/icons8-add-image-30.png"
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
           await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        }
        catch(err){
            setErr(true);
        }

    };
    return (

        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Chat App</span>
                <span className='Title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    
                    <button>Sign In</button>
                    {err && <span>Something went wrong</span>}
                </form>
               
                <p> You don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        
        
        
        </div>
    )
}

export default Login