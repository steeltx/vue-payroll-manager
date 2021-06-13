import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  firebase.initializeApp(firebaseConfig);

  // utils
  const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();

  // exports
  export { auth, storage, db };