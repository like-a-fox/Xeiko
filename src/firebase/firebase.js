import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyCNNFQpGp_gWEGIclnimkRmg7D3iGyRrkk",
    authDomain: "xeiko-fox.firebaseapp.com",
    databaseURL: "https://xeiko-fox.firebaseio.com",
    projectId: "xeiko-fox",
    storageBucket: "xeiko-fox.appspot.com",
    messagingSenderId: "496383910823"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const addTaskToFirebase = (task) => {
  db.ref('/messages').push(task)
}

const auth = firebase.auth()
const db = firebase.database()
const fstore = firebase.storage()

export {
  auth,
  db,
  fstore
}

