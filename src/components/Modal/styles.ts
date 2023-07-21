import { styled } from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: white;
    z-index: 100;
    border-radius: 6px;
    border: 3px solid #DAA520;
`

export const HeaderModal = styled.header`
    height: auto;
`

export const MainModal = styled.div`
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    gap: 3rem;
    margin: 0 5vw;
    gap: 8px;
    width: 96%;
    height: 90%;
    background: white;
`

export const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    background-color: white;
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 18%;
    background-color: white;
`

export const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 25%;
    padding: 1rem;
    background-color: #008000;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #32CD32;
    } 
    
`

export const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 25%;
    padding: 1rem;
    background-color: #800000;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #FF0000;
    } 
`