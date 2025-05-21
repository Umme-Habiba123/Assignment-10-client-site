import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init'

const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

  const [user, setUser]=useState(null)
  const [loading, setLoading]= useState(true)
    const [errorMessage, setErrorMessage]=useState('')
    const [successMessage, setSuccessMessage]=useState(false)

    const [showPassword, setShowPassword]=useState(false)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOutUser=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile=(updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }

  const userInfo = {
    user,
    loading,
    logOutUser,
    setUser,
    createUser,
     logInUser,
     googleLogIn,
     updateUserProfile,
     errorMessage,
     setErrorMessage,
     setSuccessMessage,
     successMessage,
     setShowPassword,
     showPassword
  }

  // onAuthStateChanged(auth, (currentUser)=>{
  //     console.log(currentUser)
  // })
           
  useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
     })
     return ()=>{
      unSubscribe()
     }

  },[])


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;