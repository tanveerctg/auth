import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA2GVxlQ9BJ8VX7iAcQ4STbWWOW8JeQdgE",
  authDomain: "testing-firebase-cd145.firebaseapp.com",
  databaseURL: "https://testing-firebase-cd145.firebaseio.com",
  projectId: "testing-firebase-cd145",
  storageBucket: "testing-firebase-cd145.appspot.com",
  messagingSenderId: "456600650401"
};
firebase.initializeApp(config);
// Get the Auth service for the default app
const provider = new firebase.auth.GoogleAuthProvider();

const fbProvider=new firebase.auth.FacebookAuthProvider();
const database=firebase.database();

// database.ref('users').push({name:'tanveer',age:25});
// database.ref('users').push({name:'rafi',age:25});
// database.ref('users').once('value').then(snapshot=>{
//   console.log(snapshot.val())
// })
export {firebase,provider,database,fbProvider as default};