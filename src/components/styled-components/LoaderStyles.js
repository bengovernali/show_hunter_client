import styled, { keyframes } from 'styled-components'

export const LoaderContainer = styled.div`
    margin: auto;
    margin-top: 10vh;
    width: 40vw;
    display: flex;
    justify-content: center;
`

const grow = keyframes`
    0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1, 2.2);
    }
    40% {
        transform: scale(1);
    }
`

export const LoadingBar = styled.div`
    display: inline-block;
    width: 4vw;
    height: 8vh;
    border-radius: 4px;
    margin: 0 5px;
    animation: ${grow} 1.5s ease-in-out infinite;
    align-self: flex-end;

    &:nth-child(1) {
        background-color: white;
        animation-delay: 0;
        height: 18vh;
    }

    &:nth-child(2) {
        background-color: white;
        animation-delay: 0.09s;
    }

    &:nth-child(3) {
        background-color: white;
        animation-delay: 0.18s;
    }

    &:nth-child(4) {
        background-color: white;
        animation-delay: 0.27s;
        height: 15vh;
    }
`
