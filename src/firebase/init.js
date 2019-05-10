import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: <your_apikey>,
  authDomain: 'fir-chat-a4937.firebaseapp.com',
  databaseURL: 'https://fir-chat-a4937.firebaseio.com',
  projectId: 'fir-chat-a4937',
  storageBucket: 'fir-chat-a4937.appspot.com',
  messagingSenderId: '439257404416',
  appId: '1:439257404416:web:4f71c653e1b6ce1f',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
