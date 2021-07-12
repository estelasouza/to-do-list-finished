import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKxOG-6vrQnYdNuM9u3iNiQieu_u5tIgw",
  authDomain: "todolist-finished.firebaseapp.com",
  projectId: "todolist-finished",
  storageBucket: "todolist-finished.appspot.com",
  messagingSenderId: "806544678768",
  appId: "1:806544678768:web:4f51ce4f107005d5bdb9b5",
  measurementId: "G-WYH4JZQ17Z"
};

firebase.initializeApp(firebaseConfig)

const authUser = firebase.auth()

export const CreateNewUser = (email, password) => {
  authUser.createUserWithEmailAndPassword(email,password).then((e)=>{
    console.log(e)
   
  }).catch(e=>console.log(e))
}

export const SingIn = (email,password) => {
  authUser.signInWithEmailAndPassword(email,password).then((e)=>{
    console.log(e)
   
}).catch(e=>console.log(e))
}

export const SingOut = ()=>{

}

export const ForgotPassword = (email) => { 
  authUser.sendPasswordResetEmail(email).then(e=>{
    console.log('deu certo',e)
  }).catch(e=>console.log(e))
}
