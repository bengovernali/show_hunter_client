import React from 'react'

import Login from './login/Login'
import Home from './home/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/:ath'>
                    <Login />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter