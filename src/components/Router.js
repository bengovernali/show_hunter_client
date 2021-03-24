import React from 'react'

import Login from './login/Login'
import Home from './home/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { getCookie } from '../helpers/cookie'

function AppRouter() {

    const checkToken = (component) => {
        if (!getCookie('ath')) {
            return <Redirect to="/" />
        } else {
            return component
        }
    }
    
    return (
        <Router>
            <Switch>
                <Route path='/home'>
                    {checkToken(<Home />)}
                </Route>
                <Route path='/:ath'>
                    { !getCookie('ath') ? <Login /> : <Redirect to='/home' />}
                </Route>
                <Route path="/">
                    { !getCookie('ath') ? <Login /> : <Redirect to='/home' />}
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter