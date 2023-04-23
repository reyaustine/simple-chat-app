import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrenUser] = useState({})

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrenUser(user)
            console.log(user);
        });

        return() => {
            unsub();
        }
    }, []);
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
};