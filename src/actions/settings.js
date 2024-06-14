/**
 * actions generators for settings
 */

// firebase
import database from '../firebase/firebase'

export const getSettings = async (
    user,
    settingsDispatch,
    callback = () => {}
) => {
    let snapshot = await database
        .ref(`users/${user.uid}/settings`)
        .once('value')

    // parsing snapshot data
    const settings = snapshot.val()

    // console.log(
    //     '⚙️ runngin getSettings ACTION. FETCHED settings are ...',
    //     settings
    // )

    settingsDispatch({
        type: 'SET_SETTINGS',
        settings,
    })

    callback()
}

export const setSettings = (user, settings) => {
    database
        .ref(`users/${user.uid}/settings`)
        .set(settings)
        .then((res) => {})
}

export const changeTheme = () => {}

export const changeTaskView = (user, settingsDispatch, isGridView) => {
    settingsDispatch({
        type: 'CHANGE_TASK_VIEW',
    })

    database
        .ref(`users/${user.uid}/settings/isGridView`)
        .set(isGridView)
        .then((res) => {
            //NOTE : now directly changing view without server response lag, if it's not saved then user will do request again at next lunch
            // settingsDispatch({
            //     type: 'CHANGE_TASK_VIEW',
            // })
        })
}

export const changeGridLabelVisibility = (
    user,
    settingsDispatch,
    displayGridLabel
) => {
    settingsDispatch({
        type: 'CHANGE_GRID_LABEL_VISIBILITY',
    })

    database
        .ref(`users/${user.uid}/settings/displayGridLabel`)
        .set(displayGridLabel)
        .then((res) => {
            //NOTE : now directly changing visibility without server response lag, if it's not saved then user will do request again at next lunch
            // settingsDispatch({
            //     type: 'CHANGE_GRID_LABEL_VISIBILITY',
            // })
        })
}
