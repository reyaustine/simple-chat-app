import React, { useEffect, useState }  from 'react'
import Add from "../img/icons8-add-image-30.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) => {
                    setErr(true);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                    await updateProfile(res.user,{
                        displayName,
                        photoURL:downloadURL,

                    });
                    await setDoc(doc(db,"users",res.user.uid),{
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL:downloadURL,
                    });

                    await setDoc(doc(db,"userChats",res.user.uid),{});
                    navigate("/")
                    });
                }
            
            );
        }
        catch(err){
            setErr(true);
        }
       

    };
    return (

        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Chat App</span>
                <span className='Title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder='Display Name'/>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Upload Avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p> You already have an account? <Link to="/login">Login here</Link></p>
            </div>
        
        
        
        </div>
    )
}

export default Register