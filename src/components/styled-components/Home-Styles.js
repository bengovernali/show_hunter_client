import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
`

export const HomeBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Icon = styled.img`
    max-width: 250px;
`

export const IconContainer = styled.div`
    max-width: 250px;
`

export const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 200px;
`

export const FormBar = styled.input`
    width: 30%;
    margin: 10px auto;
    padding-left: 48px;
    border: 0px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 14px;
    border-radius: 4px;

    &:focus {
        outline: none;
    }
`

export const SubmitButton = styled.button`
    background-color: #1DB954;
    padding: 19px 56px 21px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border-radius: 500px;
    border: 1px solid #1DB954;
    width: 200px;
    margin: 20px auto;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

export const Footer = styled.div`
    height: 50px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const LogoutButton = styled.div`
    margin: 50px;

    &:hover {
        cursor: pointer;
    }

`