import React, { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../services/fireBaseConfig';
import Router from 'next/router';
import { findUser } from '../utils/findUser';
import { jsonEval } from "@firebase/util";


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
        Router.push("/login");
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                const userExists = await findUser(user.email);
                if(userExists.length != 0){
                    localStorage.setItem("@AuthFirebase:token", credential.accessToken);
                    localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
                    localStorage.setItem("@AuthFirebase:role", userExists[0].role);
                    Router.push('/dashboard');
                }
            // ...
            }).catch((error) => {
                // 
                console.log(error);
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
