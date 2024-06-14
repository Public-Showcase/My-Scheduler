/**
 * Task Grid component
 */

import React, { useContext } from 'react'

// ui components
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import ListAltIcon from '@material-ui/icons/ListAlt'
import LabelIcon from '@material-ui/icons/Label'
import LabelOffIcon from '@material-ui/icons/LabelOff'
import Tooltip from '@material-ui/core/Tooltip'

// styles
import '../styles/TaskGrid.css'

// components
import Task from './Task'
import TaskSkeleton from './TaskSkeleton'

// context
import TaskContext from '../context/tasks-context'

import { changeGridLabelVisibility } from '../actions/settings'
import { toggleIU } from '../actions/tasks'

const TaskGrid = (props) => {
    const {
        tasks,
        user,
        settings,
        settingsDispatch,
        tasksDispatch,
        isLoadingData,
    } = useContext(TaskContext)

    let displayLebels = settings.displayGridLabel
    const hangleGridLabelToggle = () => {
        changeGridLabelVisibility(
            user,
            settingsDispatch,
            !settings.displayGridLabel
        )
    }

    const UI_tasks = []
    const U_tasks = []
    const I_tasks = []
    const N_tasks = []

    tasks.forEach((task) => {
        if (task.important && task.urgent) {
            UI_tasks.push(task)
        } else if (task.important && !task.urgent) {
            I_tasks.push(task)
        } else if (!task.important && task.urgent) {
            U_tasks.push(task)
        } else {
            N_tasks.push(task)
        }
    })

    const drop = (e) => {
        // runs when some thing is about to be droped on this board element
        e.preventDefault()

        const taskId = e.dataTransfer.getData('taskID') // getting ID of the dropping element

        let urgent = undefined
        let important = undefined

        switch (e.target.id) {
            case 'IU':
                urgent = true
                important = true
                break
            case 'U':
                urgent = true
                important = false
                break
            case 'I':
                urgent = false
                important = true
                break
            case 'no':
                urgent = false
                important = false
                break
            default:
                urgent = false
                important = false
        }

        toggleIU(taskId, tasksDispatch, user, { urgent, important })

        // card.style.display = 'block'
        // e.target.appendChild(card) // adding the dropping element to this board
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    return (
        <div className="taskGridContainer">
            <Tooltip title="Switch to List View">
                <IconButton
                    onClick={props.toggleView}
                    color="primary"
                    aria-label="Switch to List View"
                    component="span"
                >
                    <ListAltIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Toggle Labels">
                <IconButton
                    onClick={hangleGridLabelToggle}
                    color="primary"
                    aria-label="Toggle Labels"
                    component="span"
                >
                    {displayLebels ? <LabelOffIcon /> : <LabelIcon />}
                </IconButton>
            </Tooltip>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div
                        className="gridBox"
                        id="IU"
                        // className={props.className}
                        onDrop={drop}
                        onDragOver={dragOver}
                    >
                        {displayLebels && (
                            <>
                                <div className="boxLabels">Important</div>
                                <div className="verticalText boxLabels">
                                    Urgent
                                </div>
                            </>
                        )}
                        {UI_tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id || task.title}
                                displayGridLabel={settings.displayGridLabel}
                                setEditTask={props.setEditTask}
                            />
                        ))}

                        {tasks.length === 0 && !isLoadingData && (
                            <div>
                                {' '}
                                No tasks found! Please add one using bottom
                                input bar.
                            </div>
                        )}

                        {isLoadingData && (
                            <>
                                <TaskSkeleton />
                                <TaskSkeleton />
                            </>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div
                        className="gridBox"
                        id="U"
                        // className={props.className}
                        onDrop={drop}
                        onDragOver={dragOver}
                    >
                        {displayLebels && (
                            <>
                                <div className="boxLabels">Not-Important</div>
                            </>
                        )}
                        {U_tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id || task.title}
                                setEditTask={props.setEditTask}
                            />
                        ))}

                        {isLoadingData && (
                            <>
                                <TaskSkeleton />
                                <TaskSkeleton />
                            </>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div
                        className="gridBox"
                        id="I"
                        // className={props.className}
                        onDrop={drop}
                        onDragOver={dragOver}
                    >
                        {displayLebels && (
                            <>
                                <div className="verticalText boxLabels">
                                    Not-Urgent
                                </div>
                            </>
                        )}
                        {I_tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id || task.title}
                                displayGridLabel={settings.displayGridLabel}
                                setEditTask={props.setEditTask}
                            />
                        ))}

                        {isLoadingData && (
                            <>
                                <TaskSkeleton />
                                <TaskSkeleton />
                            </>
                        )}
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div
                        className="gridBox"
                        id="no"
                        // className={props.className}
                        onDrop={drop}
                        onDragOver={dragOver}
                    >
                        {N_tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id || task.title}
                                setEditTask={props.setEditTask}
                            />
                        ))}

                        {isLoadingData && (
                            <>
                                <TaskSkeleton />
                                <TaskSkeleton />
                            </>
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TaskGrid
