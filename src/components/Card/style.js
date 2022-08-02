import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 12em;
    height:14em;
    background-color: red;
    border-radius: 1em;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    &:hover{
        transform: scale(1.2);
        transition: all ease-in-out 0.5s;
    }
`;


export const CardFigureArea = styled.div`
    width: 100%;
    height: 70%;
    background-color: #eee;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardContentArea = styled.div`
    width: 100%;
    height: 30%;
    background-color: #7FFFD4;
    border-bottom-right-radius: 1em;
    border-bottom-left-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardContentText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

