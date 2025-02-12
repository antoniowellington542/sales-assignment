import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../services/fireBaseConfig';
import Router from 'next/router';
import { findUser } from '../utils/findUser';

const AuthGoogleContext = createContext({});

const AuthGoogleProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [signed, setSigned] = useState(false);
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
        setSigned(false);
        localStorage.clear();
        Router.replace('/login');
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                const userExists = await findUser(user.email);
                console.log(userExists);
                if(userExists.length != 0){
                    localStorage.setItem("@AuthFirebase:token", credential.accessToken);
                    localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
                    localStorage.setItem("@AuthFirebase:role", userExists[0].role);
                    setSigned(true);
                    Router.replace('/dashboard');
                }
            // ...
            }).catch((error) => {
                // 
                console.log(error);
            });
        
    }

    return (
        <AuthGoogleContext.Provider 
            value={{signInGoogle, signed, setSigned, logout}}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}

export { AuthGoogleProvider, AuthGoogleContext };
