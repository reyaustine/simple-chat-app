import React, { useContext, useState } from 'react'
import { collection, query, where,setDoc,getDocs,getDoc, serverTimestamp,updateDoc,doc } from "firebase/firestore";
import {db} from "../firebase"

import {AuthContext} from "../context/AuthContext"

const SearchBar = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null);
  const [err,setErr] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const handleSearch = async () => {
  const q = query (collection(db,"users"),where("displayName", "==", username));
  
  try{
    
    const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        
      });
      
  }
  catch(err){
    setErr(true);
  }


  };
  const handleKey = e=> {e.code === "Enter" && handleSearch() };
  const handleSelect = async () => {
    //check whether the chat existed or not, if not create new chat
    const bothId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
      const res = await getDoc(db,"chats",bothId);
      if(!res.exists()){
        await setDoc(doc(db,"chats",bothId),{messages:[]});
        //create a new chat window
        await updateDoc(doc(db,"userConvo",currentUser.uid),{
          [bothId+".userInfo"]:{
            uid:user.uid,
            displayName: user.displayName,
            photoURL:user.photoURL
          },
          [bothId +".date"]:serverTimestamp()
        });
        await updateDoc(doc(db,"userConvo",user.uid),{
          [bothId+".userInfo"]:{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [bothId +".date"]:serverTimestamp()
        })
      }
    }catch(err){

    }
   



  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search users here' 
        onKeyDown={handleKey} 
        onChange={(e) => setUsername(e.target.value)}/>
      </div>
      {err && <span>User not found!</span> }
      {user && <div className="userChat" onClick={handleSelect}>
      <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div> }
    </div>
  )
}

export default SearchBar