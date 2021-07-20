import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKxOG-6vrQnYdNuM9u3iNiQieu_u5tIgw",
  authDomain: "todolist-finished.firebaseapp.com",
  projectId: "todolist-finished",
  storageBucket: "todolist-finished.appspot.com",
  messagingSenderId: "806544678768",
  appId: "1:806544678768:web:4f51ce4f107005d5bdb9b5",
  measurementId: "G-WYH4JZQ17Z",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
