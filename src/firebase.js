
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfKLVywToSYgfCOConLHD05c6fABU_Bbw",
  authDomain: "auth-useref.firebaseapp.com",
  projectId: "auth-useref",
  storageBucket: "auth-useref.appspot.com",
  messagingSenderId: "1029491111666",
  appId: "1:1029491111666:web:921433b9c03a80d027826b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)