import React from 'react'

import {
    LoginContainer,
    Logo,
    LoginButton
} from '../styled-components/LoginStyles'

import logo from '../../images/logo2.png'

function Login() {
    return (
        <LoginContainer>
            <Logo src={logo} />
            <LoginButton>Login with Spotify</LoginButton>
        </LoginContainer>
    )
}

export default Login