/**
 * Firebase database connectioon configuration
 * And exporting this connected instance for other files
 */

import * as firebase from 'firebase'

const config = {
    apiKey: ENV('FIREBASE_API_KEY'),
    authDomain: 'myscheduler-c8f00.firebaseapp.com',
    databaseURL: ENV('FIREBASE_DATABASE_URL'),
    projectId: 'myscheduler-c8f00',
    storageBucket: ENV('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: ENV('FIREBASE_MESSAGING_SENDER_ID'),
    appId: ENV('FIREBASE_APP_ID'),
    measurementId: ENV('FIREBASE_MEASUREMENT_ID'),
}

firebase.initializeApp(config)

const database = firebase.database()

let googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
