/**
 * Task List component
 */

import React, { useContext } from 'react'

import IconButton from '@material-ui/core/IconButton'
import GridOnIcon from '@material-ui/icons/GridOn'
import Tooltip from '@material-ui/core/Tooltip'

// components
import Task from './Task'

// context
import TasksContext from '../context/tasks-context'

// styles
import '../styles/TaskList.css'

const TaskList = (props) => {
    const { tasks } = useContext(TasksContext)

    return (
        <div>
            <Tooltip title="Switch to Grid View">
                <IconButton
                    onClick={props.toggleView}
                    color="primary"
                    aria-label="Switch to Grid view"
                    component="span"
                >
                    <GridOnIcon />
                </IconButton>
            </Tooltip>
            <div className="tasklist_container">
                {tasks.length !== 0 ? (
                    tasks.map((task) => (
                        <Task
                            task={task}
                            key={task.title}
                            displayLabel={true}
                            setEditTask={props.setEditTask}
                        />
                    ))
                ) : (
                    <div>
                        No tasks found! Please add one using bottom input bar.
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskList
