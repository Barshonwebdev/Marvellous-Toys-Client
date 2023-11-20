import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import {GoogleAuthProvider, OAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth=getAuth(app)

const googleProvider= new GoogleAuthProvider();
const yahooProvider = new OAuthProvider("yahoo.com");
const AuthProvider = ({children}) => {
    
const [user,setUser]=useState(null);
const[loading,setLoading]=useState(true);

const googleSignin=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}

const yahooSignin=()=>{
    setLoading(true);
    return signInWithPopup(auth,yahooProvider);
}

const logout=()=>{
    return signOut(auth)
    .then( ()=>{
        console.log('user logged out')
    })
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        return unsubscribe();
    }
},[])
const authInfo={user,loading,googleSignin,yahooSignin,logout}
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;