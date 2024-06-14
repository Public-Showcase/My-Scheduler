// client-side routes

import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// components
import HelpPage from '../components/HelpPage'
import NotfoundPage from '../components/NotfoundPage'
import MySchedulerApp from '../components/MySchedulerApp'
import AccountPage from '../components/AccountPage'
import SettingPage from '../components/SettingPage'
import LoginPage from '../components/LoginPage'

// routes
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory() // exporting so that we can use it in other files

// main app router
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                {
                    // <PublicRoute path="/" component={LoginPage} exact={true} />
                    // <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                }
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={MySchedulerApp} />
                <PublicRoute path="/help" component={HelpPage} />
                <PrivateRoute path="/setting" component={SettingPage} />
                <PrivateRoute path="/account" component={AccountPage} />
                <Route component={NotfoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
