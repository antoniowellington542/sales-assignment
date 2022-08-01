import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../services/firebaseconfig';


const AuthGoogleContext = createContext({});

const AuthGoogleProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    
    useEffect(() => {
        const loadStoreAuth = () =>{
            const localToken = localStorage.getItem("@AuthFirebase:token");
            const localUser = localStorage.getItem("@AuthFirebase:user");

            if(localToken && localUser){
                setUser(localUser);
            }


        }
        loadStoreAuth()
    }, []);

    const logout = ()=>{
        localStorage.clear();
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUser(user);
            
            localStorage.setItem("@AuthFirebase:token", token);
            localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <AuthGoogleContext.Provider 
            value={{signInGoogle, signed: !!user, logout}}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}

export { AuthGoogleProvider, AuthGoogleContext };
