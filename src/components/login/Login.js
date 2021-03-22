import React, { useEffect } from 'react'

import { useLocation, Redirect } from 'react-router-dom'

import {
    LoginContainer,
    Logo,
    LoginButton
} from '../styled-components/LoginStyles'

import logo from '../../images/logo2.png'

function Login() {

    const useQuery = () => {
        console.log(new URLSearchParams(useLocation().search))
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()
    console.log(query)
    console.log(query.get("ath"))

    return (
        <>
            {!query.get("ath") ?
                <LoginContainer>
                    <Logo src={logo} />
                    <a href='http://localhost:3000/auth/spotify'>
                        <LoginButton >Login with Spotify</LoginButton>
                    </a>
                </LoginContainer> :
                <Redirect to={{
                    pathname: "/home"
                }} />
            }
        </>
    )
}

export default Login