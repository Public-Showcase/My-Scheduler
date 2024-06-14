import React, { useReducer, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// PWA
import * as serviceWorker from './serviceWorker'

// actions
import { logout, login } from './actions/auth'
import { populateTasks } from './actions/tasks'
import { getSettings } from './actions/settings'

// sentry - runtime error monitoring tool
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

// components
import LoadingPage from './components/LoadingPage'
// import ActivityIndicator from './components/ActivityIndicator'

// context
import TasksContext from './context/tasks-context'

// reducer
import tasksReducer from './reducers/tasksReducer'
import authReducer from './reducers/authReducer'
import settingsReducer from './reducers/settingsReducer'

// Router for client-side routing
import AppRouter, { history } from './routers/AppRouter'

// firebase
import { firebase } from './firebase/firebase'

// styles
import './index.css'

Sentry.init({
    dsn: 'https://e63faadd4c88454192c7b5d1b227b496@o919593.ingest.sentry.io/5863834',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
})

// for use of login/logout first rendering at `onAuthChange` code
let userDispatchOuter = undefined
// let tasksDispatchOuter = undefined

const App = () => {
    const [isLoadingData, setLoadingData] = useState(true)

    const [tasks, tasksDispatch] = useReducer(tasksReducer, [])
    const [user, userDispatch] = useReducer(authReducer, {})
    const [settings, settingsDispatch] = useReducer(settingsReducer, {
        isDarktheme: false,
        isGridView: true,
        displayGridLabel: true,
    })

    userDispatchOuter = userDispatch
    // tasksDispatchOuter = tasksDispatch

    useEffect(() => {
        // const tasks = JSON.parse(localStorage.getItem('mySchedulerTasks'))

        // if(tasks) {
        //     tasksDispatch(populateTasks(tasks))
        // }

        // console.log('🚨 running useEffect of index.js')

        populateTasks(tasksDispatch, user, () => {
            console.log('⬇️ Tasks fetched!')
            setLoadingData(false)
        })

        getSettings(user, settingsDispatch, () => {
            console.log('⬇️ settings fetched!')
            setLoadingData(false)
        })
    }, [user])
    // }, [user, settings]) // like componentDidMount

    return (
        <div>
            {
                //Now Displaying in TasksGrid and TaskList component// user.uid && isLoadingData && <ActivityIndicator />
            }
            <TasksContext.Provider
                value={{
                    tasks,
                    tasksDispatch,
                    user,
                    userDispatch,
                    settings,
                    settingsDispatch,
                    isLoadingData,
                }}
            >
                <AppRouter />
            </TasksContext.Provider>
        </div>
    )
}

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<App />, document.getElementById('root'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // store.dispatch(startSetExpenses()).then(() => {
        //     renderApp()
        //     if(history.location.pathname === '/') { // only redirecting if user just loged-in, not on manual page refresh
        //         history.push('/dashboard')
        //     }
        // })

        renderApp()
        userDispatchOuter(login(user.uid))
        history.push('/dashboard')
    } else {
        renderApp()
        userDispatchOuter(logout())
        history.push('/')
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()
