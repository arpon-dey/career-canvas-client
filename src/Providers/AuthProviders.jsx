import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userUpdate = (userInf) => {
        return updateProfile(auth.currentUser, userInf)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        return signOut(auth)
    }

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signInUser,
        userUpdate,
        googleSignIn,
        logOut,
        loading

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;