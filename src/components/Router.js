import React from 'react'

import Login from './login/Login'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path='/home'>
                    <div>HOME</div>
                </Route>
                <Route path='/:ath'>
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter