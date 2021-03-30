import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { setCookie } from '../../helpers/cookie'

import { connect } from 'react-redux'

import { addToken } from '../../redux/actions/tokenActions'

import {
    LoginContainer,
    Logo,
    LoginButton
} from '../styled-components/LoginStyles'

import logo from '../../images/logo2.png'

function Login({addToken}) {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()

    useEffect(() => {
        if (!!query.get("ath")) {
            setCookie('ath', query.get("ath"))
            setCookie('rth', query.get("rth"))
            addToken()
        }
    }, [query, addToken])

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

const mapDispatchToProps = (dispatch) => {
    return {
        addToken: () => dispatch(addToken)
    }
}

export default connect(null, mapDispatchToProps)(Login)