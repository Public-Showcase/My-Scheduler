/**
 * actions generators for authencation
 */

import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = (userDispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
        userDispatch(login(result.user.uid))
    })
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = (userDispatch) => {
    firebase.auth().signOut().then((data) => {
        userDispatch(logout())
    })
}
