/**
 * route for "public-only" so logged-in user can't use them
 */

import React, { useContext } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'

// context
import TasksContext from '../context/tasks-context'

const PublicRoute = ({ component: Component, ...rest }) => {
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
                    <Component {...props} />
                )
            }
        />
    )
}

export default PublicRoute
