/**
 * Header component
 */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import ConfirmDialog from './ConfirmDialog.js'

// action
import { startLogout } from '../actions/auth'

// styles
import '../styles/Header.css'

// context
import TasksContext from '../context/tasks-context'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    navButton: {
        color: '#eeeeee',
    },
    logoutButton: {
        color: '#ffffff',
        backgroundColor: '#ff0000',
    },
}))

const Header = () => {
    const { userDispatch } = useContext(TasksContext)
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const logoutClickHandler = () => {
        setOpen(true)
    }

    const handleLogout = () => {
        startLogout(userDispatch)
        setOpen(false)
    }

    return (
        <header className="header">
            <ConfirmDialog
                open={open}
                handleClose={handleClose}
                handleConfirm={handleLogout}
                title="Are you sure to Logout?"
                message="Confirm Logout! If you're not loging out to use different account, then just close the Tab, no need to logout. Yout session token is saved securely by Google."
            />

            <Tooltip title="dashboard page">
                <Link to="/dashboard" className="header__title">
                    Triage
                </Link>
            </Tooltip>

            <div className="menu">
                <div>
                    {/* <Link to="/help">
                        <Tooltip title="help page">
                            <IconButton
                                // onClick={props.toggleView}
                                className={classes.navButton}
                                // color="primary"
                                aria-label="help page"
                                component="span"
                            >
                                <HelpOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    </Link> */}

                    {/* <Link to="/setting">
                        <Tooltip title="settings page">
                            <IconButton
                                // onClick={props.toggleView}
                                className={classes.navButton}
                                color="primary"
                                aria-label="settings page"
                                component="span"
                            >
                                <SettingsIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to="/account">
                        <Tooltip title="account page">
                            <IconButton
                                // onClick={props.toggleView}
                                className={classes.navButton}
                                color="primary"
                                aria-label="account page"
                                component="span"
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        </Tooltip>
                    </Link> */}
                </div>
                <div>
                    <Link to="/help">
                        <Tooltip title="help page">
                            <IconButton
                                // onClick={props.toggleView}
                                className={classes.navButton}
                                // color="primary"
                                aria-label="help page"
                                component="span"
                            >
                                <HelpOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Button
                        variant="contained"
                        // color="secondary"
                        className={classes.logoutButton}
                        // size="small"
                        startIcon={<ExitToAppIcon />}
                        onClick={logoutClickHandler}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    )
}

export { Header as default }
