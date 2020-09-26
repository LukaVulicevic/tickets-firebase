import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDElEZzRVTv8nhZ66OCRxZhwRCtTx47gM0",
    authDomain: "tickets-b6de9.firebaseapp.com",
    databaseURL: "https://tickets-b6de9.firebaseio.com",
    projectId: "tickets-b6de9",
    storageBucket: "tickets-b6de9.appspot.com",
    messagingSenderId: "1031721720021",
    appId: "1:1031721720021:web:b9334ce6cbed3cf65cea5c"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()