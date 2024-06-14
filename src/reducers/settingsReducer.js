/**
 * reducer function for settings
 */

const settingsReducer = (state, action) => {
    // console.log('⚙️ runngin setSettings REDUCER', state, action)

    switch (action.type) {
        case 'SET_SETTINGS':
            return action.settings || state
        case 'CHANGE_THEME':
            return { ...state, isDarktheme: !state.isDarktheme }
        case 'CHANGE_TASK_VIEW':
            return { ...state, isGridView: !state.isGridView }
        case 'CHANGE_GRID_LABEL_VISIBILITY':
            return { ...state, displayGridLabel: !state.displayGridLabel }
        default:
            return state
    }
}

export default settingsReducer
