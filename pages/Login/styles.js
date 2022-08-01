import styled from "styled-components";


export const LoginBox = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #7FFFD4 40%, white 40%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    box-shadow: 0.5em 0.5em 2em #000;
`
export const LoginLogo = styled.div`
    width: 36%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

export const LoginTitle = styled.h1`
    font-size: 1em; 
    font-weight: 700; 
    padding-bottom: 4em;
`


export const LoginContent =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em;
    width: 64%;
    height: 100%;
    margin-left: auto;
`

export const LoginInputArea = styled.div`
    display: flex;
    flex-direction: column;
`

export const LoginInput = styled.input`
    width: 25em;
    border-radius: 0.5em;
    border-color: #eee;
    border: 2px solid #eee;
    padding: 1em;
    margin: 0.7em 0em;
`

export const LoginButton = styled.a`
    background-color: #7FFFD4;
    padding: 1em;
    width: 21em;
    border-radius: 0.5em;
    text-align: center;
    margin-top: 3em;
    font-weight: 700;
`

export const LoginText = styled.span`
    margin-left: auto;
    font-size: 0.8em;
`