import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LoginBox, LoginButton, LoginContainer, LoginContent, LoginInput, LoginInputArea, LoginLogo, LoginText, LoginTitle } from "./styles";
import { FcMoneyTransfer, FcGoogle } from 'react-icons/fc';
import { app } from "../../services/firebaseconfig";
import { useContext } from "react";
import { AuthGoogleContext } from "../../src/contexts/authGoogle";
const Login = () =>{

    const { signInGoogle } = useContext(AuthGoogleContext);
    return(
        <LoginBox>
            <LoginContainer>
                <LoginLogo>
                    <FcMoneyTransfer size={200} />
                    <h2>SaleStore</h2>
                </LoginLogo>
                <LoginContent>
                    <LoginTitle>
                       Log in
                    </LoginTitle>
                    <LoginInputArea>
                        <label htmlFor="email">Email</label>
                        <LoginInput id="email" name="email" type="email" placeholder="joe@email.com" />
                    </LoginInputArea>
                    <LoginInputArea >
                        <label htmlFor="password">Password</label>
                        <LoginInput id="password" name="password" type="password" placeholder="Enter your Password" />
                        <LoginText href="/forgot-password">forgot password?</LoginText>
                    </LoginInputArea>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <LoginButton type="login">Login</LoginButton>
                        <LoginButton onClick={signInGoogle} ><FcGoogle size={20}/></LoginButton>
                    </div>
                </LoginContent>
            </LoginContainer>
        </LoginBox>
    )
}

export { Login };