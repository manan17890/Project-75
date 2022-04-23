import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlXMMn3xTOTeu41qUlzCZubdY2h6LWE5w",
  authDomain: "project-71-9d9d0.firebaseapp.com",
  projectId: "project-71-9d9d0",
  storageBucket: "project-71-9d9d0.appspot.com",
  messagingSenderId: "197645882433",
  appId: "1:197645882433:web:a0d0cefeb29f70a88022c0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
