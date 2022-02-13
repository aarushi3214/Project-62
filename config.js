 import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyD0k2KIeaSLREqjVlxBO7jmd9nue7OPVjA",
  authDomain: "pro-60-20e42.firebaseapp.com",
  projectId: "pro-60-20e42",
  storageBucket: "pro-60-20e42.appspot.com",
  messagingSenderId: "1054885297276",
  appId: "1:1054885297276:web:5f99dec68c4ab6f95e9df9"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
 

  