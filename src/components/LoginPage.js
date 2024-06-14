/**
 * LoginPage component
 */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// ui components
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Text from '@material-ui/core/Typography'

// import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone'
import GoogleLogo from '../assets/icons/GoogleLogo.svg'

// actions
import { startLogin } from '../actions/auth'

// context
import TasksContext from '../context/tasks-context'

// styles
import '../styles/LoginPage.css'

const LoginPage = () => {
    const { userDispatch } = useContext(TasksContext)

    return (
        <Container maxWidth="sm" className="main-container">
            <div className="title">Triage webApp</div>

            <Button
                variant="contained"
                color="primary"
                onClick={() => startLogin(userDispatch)}
            >
                <img
                    alt="google logo"
                    src={GoogleLogo}
                    height={32}
                    width={32}
                />
                Login with Google
            </Button>

            <br />
            <Link to="/help" className="link">
                See reference materials
            </Link>
        </Container>
    )
}

export default LoginPage
