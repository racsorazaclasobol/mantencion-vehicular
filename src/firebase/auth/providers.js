import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from './../config'

 const googleProvider = new GoogleAuthProvider();


 export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirebaseAuth,  googleProvider );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {

        console.log(error)

        const errorCode = error.code;
        const errorMessage = error.message;

        return { 
            ok: false,
            errorMessage: errorMessage

        }
        
    }
    
 }

 export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        //Asignamos el nombre del usuario a la cuenta
        await updateProfile( FirebaseAuth.currentUser, { displayName } )


        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
 }

 export const loginWithEmailPassword = async ({ email, password }) => {
     
     try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, displayName, photoURL } = resp.user;       

        return {
            ok: true,
            uid, displayName, photoURL
        }
        
    } catch (error) {
        return {
            ok: false, 
            errorMessage: error.message
        }
    }
 }

//  export const logoutFirebase = async () => { 


//   }

