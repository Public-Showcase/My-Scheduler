/**
 * Reducer function for Tasks state
 */

/**
 * 1arg-tasks array
 * returns sorted array, sorted by "UI > U > I > _ "
 */
const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
        const au = a.urgent
        const ai = a.important
        const bu = b.urgent
        const bi = b.important

        // urgent > important
        if (
            (!au && ai && !bu && !bi) ||
            (au && !ai && !bu && !bi) ||
            (au && !ai && !bu && bi) ||
            (au && ai && !bu && !bi) ||
            (au && ai && !bu && bi) ||
            (au && ai && bu && !bi)
        ) {
            return -1 // a less
        } else if (
            (!au && !ai && !bu && !bi) ||
            (!au && ai && !bu && bi) ||
            (au && !ai && bu && !bi) ||
            (au && ai && bu && bi)
        ) {
            return 0 // same
        } else {
            return 1 // b less
        }
    })
}

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TASKS':
            return sortTasks(action.tasks)
        case 'ADD_TASK':
            return sortTasks([...state, action.task])
        case 'EDIT_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates,
                        saveState: 1,
                    }
                } else {
                    return task
                }
            })
        case 'TOGGLE_HIGHLIGHT':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        highlighted: action.highlighted,
                    }
                } else {
                    return task
                }
            })
        case 'TOGGLE_IU':
            // console.log('Tggl IU in Rdcr -->', action.important, action.urgent)
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        urgent: action.urgent,
                        important: action.important,
                    }
                } else {
                    return task
                }
            })
        case 'REMOVE_TASK':
            return state.filter((task) => task.id !== action.id)
        default:
            return state
    }
}

export default tasksReducer
