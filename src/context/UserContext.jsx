import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const UserContext = ({children}) => {
        const [user,setUser] = useState("null")
        const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, presentUser =>{
            setLoading(false)
            setUser(presentUser)
        })
        return () =>{
            subscribe()
        }
    },[])
    // update user name photo 
    const updateUser = (Name,photo) =>{
        updateProfile(auth.currentUser,{
            displayName: Name,photoURL:photo
        })
    }
    // create user 
    const createUser = (name,email,photo,password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(user => {
            updateUser(name,photo)
            console.log(user);
        })
        
    }
    
    const signInUser = (email,password) =>{
        setLoading(true)
       return  signInWithEmailAndPassword(auth,email,password)
        
    }

    // sign up with google 
    const Googleprovider = new GoogleAuthProvider()
    const logInWithGoogle = () =>{
        setLoading(true)
     return  signInWithPopup(auth,Googleprovider)
       
    }

    const githubProvider = new GithubAuthProvider()
    const loginGitHub = () =>{
      return  signInWithPopup(auth,githubProvider)
    }
    // sign out function 
    const LogOut = () =>{
        signOut(auth)
    }
    const userInfo = {
        user,
        loading,
        logInWithGoogle,
        LogOut,
        createUser,signInUser,loginGitHub
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;