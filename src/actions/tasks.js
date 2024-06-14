/**
 * action generators for `tasks` related actions
 */

// firebase
import database from '../firebase/firebase'

// uuid for temp id
import uuid from 'react-uuid'

// export const populateTasks = (tasks) => ({
//     type: 'POPULATE_TASKS',
//     tasks
// })

export const populateTasks = (tasksDispatch, user, callback) => {
    database
        .ref(`users/${user.uid}/tasks`)
        .once('value')
        .then((snapshot) => {
            const tasks = []

            // parsing snapshot data
            snapshot.forEach((childSnapshot) => {
                tasks.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                })
            })

            tasksDispatch({
                type: 'POPULATE_TASKS',
                tasks,
            })

            callback()
        })
}

// export const addTask = (task) => ({
//     type: 'ADD_TASK',
//     task
// })

export const addTask = (task, tasksDispatch, user) => {
    let tempId = uuid()
    database
        .ref(`users/${user.uid}/tasks`)
        .push({
            ...task,
            saveState: 1,
        })
        .then((ref) => {
            tasksDispatch({
                type: 'EDIT_TASK',
                id: tempId,
                updates: {
                    id: ref.key,
                    saveState: 1,
                },
            })
        })
        .catch((error) => {
            console.log('error', error)
            tasksDispatch({
                type: 'EDIT_TASK',
                id: tempId,
                updates: {
                    saveState: 2,
                },
            })
        })

    tasksDispatch({
        type: 'ADD_TASK',
        task: {
            id: tempId,
            ...task,
        },
    })
}

export const editTask = (taskId, updates, tasksDispatch, user) => {
    database
        .ref(`users/${user.uid}/tasks/${taskId}`)
        .update({ ...updates, saveState: 1 })
        .then((ref) => {
            tasksDispatch({
                type: 'EDIT_TASK',
                id: taskId,
                updates,
                saveState: 1,
            })
        })
        .catch((error) => console.log('error', error))
}

export const removeTask = (id, tasksDispatch, user) => {
    database
        .ref(`users/${user.uid}/tasks/${id}`)
        .remove()
        .then((ref) => {
            tasksDispatch({
                type: 'REMOVE_TASK',
                id,
            })
        })
        .catch((error) => console.log('error', error))
}

// Toggel Urgency-Importance
export const toggleIU = (
    taskId,
    tasksDispatch,
    user,
    { urgent, important }
) => {
    // console.log('🕐❗️ IU Toggle ', important, urgent)

    database
        .ref(`users/${user.uid}/tasks/${taskId}`)
        .update({ urgent, important })
        .then((ref) => {
            tasksDispatch({
                type: 'TOGGLE_IU',
                id: taskId,
                urgent,
                important,
            })
        })
        .catch((error) => console.log('error', error))
}

export const toggleHighlight = (task, tasksDispatch, user) => {
    // console.log('🌈 HighLIGHTED Toggle ', task.highlighted)
    database
        .ref(`users/${user.uid}/tasks/${task.id}`)
        .update({ highlighted: task.highlighted })
        .then((ref) => {
            tasksDispatch({
                type: 'TOGGLE_HIGHLIGHT',
                id: task.id,
                highlighted: task.highlighted,
            })
        })
        .catch((error) => console.log('error', error))
}
