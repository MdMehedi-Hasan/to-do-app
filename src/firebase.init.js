// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-3YkZXqSFoa_hAkxAl5WLSCBEYtS1vX0",
  authDomain: "todo-9afda.firebaseapp.com",
  projectId: "todo-9afda",
  storageBucket: "todo-9afda.appspot.com",
  messagingSenderId: "485488438487",
  appId: "1:485488438487:web:6c06c349f7c126fc88d492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth