import React, { useContext, useState } from 'react'

// components
import TaskList from './TaskList'
import TaskGrid from './TaskGrid'
import AddTaskForm from './AddTaskForm'

import TaskContext from '../context/tasks-context'

import { changeTaskView } from '../actions/settings'

// styles
import '../styles/MySchedulerApp.css'

const MySchedulerApp = () => {
    const { user, settings, settingsDispatch } = useContext(TaskContext)
    const [editTask, setEditTask] = useState(undefined)

    // useEffect(() => {
    //     if(tasksDispatch.length !== localStorage.getItem('mySchedulerTasks')) {
    //         localStorage.setItem('mySchedulerTasks', JSON.stringify(tasks))
    //     }
    // }, [tasks]) // runs on `tasks` change

    const toggleView = () => {
        changeTaskView(user, settingsDispatch, !settings.isGridView)
    }

    return (
        <div className="my-scheduler-app">
            {editTask && <div id="edit-task-overlay"></div>}
            {settings.isGridView ? (
                <TaskGrid
                    toggleView={toggleView}
                    editTask={editTask}
                    setEditTask={setEditTask}
                />
            ) : (
                <TaskList
                    editTask={editTask}
                    setEditTask={setEditTask}
                    toggleView={toggleView}
                />
            )}
            <AddTaskForm editTask={editTask} setEditTask={setEditTask} />
        </div>
    )
}

export { MySchedulerApp as default }
