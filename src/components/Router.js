import React from 'react'

import Login from './login/Login'
import Home from './home/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

function AppRouter({tokenPresent}) {

    console.log(tokenPresent)
    
    const checkToken = (component) => {
        if (!tokenPresent) {
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
                    { !tokenPresent ? <Login /> : <Redirect to='/home' />}
                </Route>
                <Route path="/">
                    { !tokenPresent ? <Login /> : <Redirect to='/home' />}
                </Route>
            </Switch>
        </Router>
    )
}

function mapStateToProps(state) {
    return {
        tokenPresent: state.tokenReducer.tokenPresent
    }
}

export default connect(mapStateToProps)(AppRouter)