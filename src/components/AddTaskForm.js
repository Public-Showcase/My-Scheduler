/**
 * AddTaskForm component
 */

import React, { useContext, useState } from 'react'

// actions
import { addTask, editTask } from '../actions/tasks'

// context
import TasksContext from '../context/tasks-context'

// ui components
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import Checkbox from '@material-ui/core/Checkbox'
import AlarmOnTwoToneIcon from '@material-ui/icons/AlarmOnTwoTone'
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined'
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'

// styles
import '../styles/AddTaskForm.css'

const AddTaskForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [urgent, setUrgent] = useState(false)
    const [important, setImportant] = useState(false)

    const { tasksDispatch, user, tasks } = useContext(TasksContext)

    // !title is added to prevent infinite re-rendering proble
    //      because when state changes based on prop.editTask, it re-renders, then checks condition again and sets Data again and changes state
    //      and re-render and cycle loops
    if (props.editTask && !title) {
        let task = tasks.find((task) => task.id === props.editTask)

        setTitle(task.title)
        setDescription(task.description)
        setUrgent(task.urgent)
        setImportant(task.important)

        console.log('Edt->Form', task.title)
    }

    const handelAddTask = (event) => {
        event.preventDefault()

        // tasksDispatch(addTask({
        //     title,
        //     description,
        //     urgent,
        //     important
        // }))

        if (props.editTask) {
            editTask(
                props.editTask,
                {
                    title,
                    description,
                    urgent,
                    important,
                    saveState: 0, // uploading
                },
                tasksDispatch,
                user
            )
        } else {
            if (!title) {
                return alert('Please Enter Task Title!')
            }

            addTask(
                {
                    title,
                    description,
                    urgent,
                    important,
                    saveState: 0, // uploading
                },
                tasksDispatch,
                user
            )
        }

        setTitle('')
        setDescription('')
        setUrgent(false)
        setImportant(false)
    }

    const resetInputs = () => {
        setTitle('')
        setDescription('')
        setUrgent(false)
        setImportant(false)

        props.setEditTask(undefined)
    }

    return (
        <form
            // onSubmit={handelAddTask}
            // onAbort={resetInputs}
            className="form_main"
        >
            <TextField
                id="outlined-basic"
                label="task title"
                InputLabelProps={{
                    style: { color: '#989393' }, // Placeholder text color
                }}
                // border color white
                variant="outlined"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <TextField
                id="outlined-basic"
                className="form_description"
                label="task description"
                InputLabelProps={{
                    style: { color: '#989393' }, // Placeholder text color
                }}
                variant="outlined"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <div>
                <Tooltip title="Urgent">
                    <Checkbox
                        icon={
                            <AccessAlarmsOutlinedIcon
                                style={{ color: '#ffffff' }}
                            />
                        }
                        checkedIcon={
                            <AlarmOnTwoToneIcon
                                className="pulsing"
                                style={{ color: '#ffffff' }}
                            />
                        }
                        name="Urgent"
                        checked={urgent}
                        onChange={(event) => setUrgent(event.target.checked)}
                    />
                </Tooltip>

                <Tooltip title="Important">
                    <Checkbox
                        icon={
                            <ErrorOutlineOutlinedIcon
                                style={{ color: '#ffffff' }}
                            />
                        }
                        checkedIcon={
                            <ErrorSharpIcon
                                className="pulsing"
                                style={{ color: '#ffffff' }}
                            />
                        }
                        name="Important"
                        checked={important}
                        onChange={(event) => setImportant(event.target.checked)}
                    />
                </Tooltip>
            </div>

            <Button
                variant="contained"
                color="default"
                startIcon={<CancelIcon />}
                onClick={resetInputs}
            >
                Cancel
            </Button>

            <Button
                variant="contained"
                color="default"
                startIcon={<AddCircleIcon />}
                onClick={handelAddTask}
            >
                Add
            </Button>

            {/* change this on mobiile screens

                <Tooltip title="Cancel">
                    <IconButton
                        // onClick={() => {}}
                        color="primary"
                        aria-label="Cancel"
                        component="span"
                        type="reset"
                    >
                        <CancelIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Add Task">
                    <IconButton
                        // onClick={() => {}}
                        color="primary"
                        aria-label="Add Task"
                        component="span"
                        type="submit"
                    >
                        <AddCircleIcon />
                    </IconButton>
                </Tooltip>
    */}
        </form>
    )
}

export default AddTaskForm
