import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 90%;
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: 75%;
`

export const LoginButton = styled.button`
    background-color: #1DB954;
    padding: 19px 56px 21px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border-radius: 500px;
    border: 1px solid #1DB954;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`