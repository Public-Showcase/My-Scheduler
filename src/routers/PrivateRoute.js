/**
 * Private routes - for making user not visit some route without logout like login page route
 */

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

// components
import Header from '../components/Header'

// context
import TasksContext from '../context/tasks-context'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(TasksContext)

    return (
        <Route
            {...rest}
            component={(props) =>
                user.uid ? (
                    <>
                        <Header />
                        <Component {...props} />
                    </>
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )
}

export default PrivateRoute
