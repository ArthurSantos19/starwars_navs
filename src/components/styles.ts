import styled from 'styled-components';

export const CardBody = styled.div`
    width: 40%;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 1rem;
    box-sizing: border-box;
    justify-content: center;

    margin-top: 5rem;
`

export const CardNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 200px;
    aspect-ratio: 2/1;

    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    box-sizing: border-box;
    margin: 1rem 0;
    background: white;
    /* overflow: hidden; */

    &:hover {
        transform: scale(1.1);
        border: 2px solid #FFD700;
    }

    h3 {
        margin-bottom: 1rem;
    }

    img {
        width: 6.5rem;
        height: 6.5rem;
        /* object-fit: contain; */
        border-radius: 10px;
    }
`