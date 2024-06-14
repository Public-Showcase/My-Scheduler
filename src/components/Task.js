/**
 * Task component
 */

import React, { useContext, useState } from 'react'

// components
import Label from './Label'
// import Button from '@material-ui/core/Button'

import ConfirmDialog from './ConfirmDialog.js'

// UI components
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import HighlightIcon from '@material-ui/icons/Highlight'
import CloudDoneIcon from '@material-ui/icons/CloudDone' // cloud done
import CloudUploadIcon from '@material-ui/icons/CloudUpload' // cloud uploading
import CloudOffIcon from '@material-ui/icons/CloudOff' // cloud not uploaded
// import EditIcon from '@material-ui/icons/Edit'

// styles
import '../styles/Task.css'

// context
import TasksContext from '../context/tasks-context'

// actions
import { removeTask, toggleHighlight } from '../actions/tasks'

const Task = ({ task, displayLabel, displayGridLabel, setEditTask }) => {
    const { tasksDispatch, user } = useContext(TasksContext)

    const [open, setOpen] = useState(false)

    const handleRemove = () => {
        removeTask(task.id, tasksDispatch, user)
        setOpen(false)
    }

    const handleEditTaskInside = () => {
        console.log('Editing ...', task.title)
        setEditTask(task.id)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const removeTaskHandler = () => {
        setOpen(true)
    }

    const handleToggleHighlight = () => {
        task.highlighted = !task.highlighted
        toggleHighlight(task, tasksDispatch, user)
    }

    let additionalClasses = ''
    if (task.highlighted) {
        additionalClasses += ' rainbow-bg'
    }
    if (displayGridLabel) {
        additionalClasses += ' taskLeftMargin'
    }

    const dragStart = (e) => {
        // const target = e.target

        e.dataTransfer.setData('taskId', task.id)

        // to hide card when it's grabbed, a little delay is there to make sure it's not hidden before we grab it
        // setTimeout(() => {
        // 	target.style.display = "none";
        // }, 0);
    }

    const dragOver = (e) => {
        e.stopPropagation()
    }

    return (
        <div
            className={
                // adding highliting class to the div of task
                'task_container' + additionalClasses
            }
            onClick={handleEditTaskInside}
            // id={props.id}
            // className={props.className}
            draggable="true" //{props.draggable} // if it's dragable or not, boolean
            onDragStart={dragStart} // runs when we start draging this card element
            onDragOver={dragOver} // runs when we dropped this card element
        >
            <ConfirmDialog
                open={open}
                handleClose={handleClose}
                handleConfirm={handleRemove}
                title="Are you sure to delete?"
                message="Confirm deleting the task! Great work completing the task. Keep it up."
            />

            <span>
                {task.title} :{' '}
                <span className="task_description">{task.description}</span>
            </span>
            <div className="task_atEnd">
                {displayLabel && (
                    <>
                        <Label type="urgent" display={task.urgent} />
                        <Label type="important" display={task.important} />
                    </>
                )}

                <Tooltip title="online save status">
                    {task.saveStates === 0 ? (
                        <CloudUploadIcon
                            style={{ color: 'black', fontSize: 20 }}
                        />
                    ) : task.saveState === 1 ? (
                        <CloudDoneIcon
                            style={{ color: 'green', fontSize: 20 }}
                        />
                    ) : (
                        <CloudOffIcon style={{ color: 'red', fontSize: 20 }} />
                    )}
                </Tooltip>

                {/* NOTE : not only using onTaskTap to edit task
                    
                <Tooltip title="Edit Task">
                    <IconButton
                        onClick={() => {}}
                        color="primary"
                        aria-label="Edit Task"
                        component="span"
                    >
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                    */}

                <Tooltip title="Toggle Task Highlight">
                    <IconButton
                        onClick={handleToggleHighlight}
                        color="primary"
                        aria-label="Toggle Task Highlight"
                        component="span"
                    >
                        <HighlightIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete Task">
                    <IconButton
                        onClick={removeTaskHandler}
                        color="primary"
                        aria-label="Delete Task"
                        component="span"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Task
