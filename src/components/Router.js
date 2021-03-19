import React from 'react'

import Login from './login/Login'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter