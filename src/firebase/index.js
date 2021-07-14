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

const db = firebase.firestore();
const userUid = localStorage.getItem("uid") || '000';

const createTask = (userUid, task) =>
  db
    .collection("users")
    .doc(userUid) //user logado
    .collection("tasks")
    .doc() //doc() cria um novo doc com um id aleatorio
    .set({ title: task, done: false, date: Date.now() });

const updateTask = async (task, status) => {

  db.collection("users")
    .doc(userUid) //user logado
    .collection("tasks")
    .doc(task.id) //doc() cria um novo doc com um id aleatorio
    .update({ done: status });
};

const deleteTask = async (task, getTasks) => {

  db.collection("users")
    .doc(userUid) //user logado
    .collection("tasks")
    .doc(task.id) //doc() cria um novo doc com um id aleatorio
    .delete();
    getTasks()
};


export const SingOut = ()=>{

}



export { createTask, db, updateTask, deleteTask };
