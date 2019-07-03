import firebase from 'firebase/app'
import 'firebase/firestore'

require('firebase/app')
require("firebase/firestore")

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyAIRCbrELNK2Rk6J4WrKFLeTzNRO1pbsZk",
        authDomain: "fir-blog-685cf.firebaseapp.com",
        databaseURL: "https://fir-blog-685cf.firebaseio.com",
        projectId: "fir-blog-685cf",
        storageBucket: "",
        messagingSenderId: "59569544426",
        appId: "1:59569544426:web:5bfc06742d0c36e9"
    }
    firebase.initializeApp(config)
    
}

export const db = firebase.firestore();
// export const proj =  db.ref("proj");
