import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { setCookie } from '../../helpers/cookie'

import { createBrowserHistory } from 'history'

import {
    LoginContainer,
    Logo,
    LoginButton
} from '../styled-components/LoginStyles'

import logo from '../../images/logo2.png'

function Login() {

    const history = createBrowserHistory()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()

    useEffect(() => {
        if (!!query.get("ath")) {
            setCookie('ath', query.get("ath"))
            history.push('/home')
        }
    }, [history, query])

    return (
        <>
            <LoginContainer>
                <Logo src={logo} />
                <a href='http://localhost:3000/auth/spotify'>
                    <LoginButton >Login with Spotify</LoginButton>
                </a>
            </LoginContainer>
        </>
    )
}

export default Login