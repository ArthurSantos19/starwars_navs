import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.5rem;
    background-color: black;
    z-index: 100;
    font-size: 1em;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5rem;

    img {
        max-width: 90%;
        height: 100%;
    }
`