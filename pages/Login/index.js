import { LoginBox, LoginButton, LoginContainer, LoginContent, LoginInput, LoginInputArea, LoginLogo, LoginText, LoginTitle } from "./styles";
import { FcMoneyTransfer } from 'react-icons/fc';
const Login = () =>{
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
                        <LoginText href="#">forgot password?</LoginText>
                    </LoginInputArea>
                    <LoginButton href="#">Login</LoginButton>
                </LoginContent>
            </LoginContainer>
        </LoginBox>
    )
}

export { Login };