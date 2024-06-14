import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import '../styles/ConfirmDialog.css'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    cancelButton: {
        color: '#ffffff',
    },
    confirmButton: {
        color: '#ff0000',
    },
}))

const ConfiemDialog = ({
    open,
    handleClose,
    handleConfirm,
    title,
    message,
}) => {
    const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="dialog"
        >
            <DialogTitle id="alert-dialog-title" className="dialogTitle">
                {title}
            </DialogTitle>
            <DialogContent className="dialogContent">
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions className="dialogActions">
                <Button onClick={handleClose} className={classes.cancelButton}>
                    Cancel
                </Button>
                <Button
                    onClick={handleConfirm}
                    className={classes.confirmButton}
                    autoFocus
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfiemDialog
