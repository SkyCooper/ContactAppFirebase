import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApJXH5o1PXazmK6AU_qFsAo3gmdRdzZCI",
  authDomain: "fire-contact-project-12.firebaseapp.com",
  databaseURL: "https://fire-contact-project-12-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-12",
  storageBucket: "fire-contact-project-12.appspot.com",
  messagingSenderId: "454240655526",
  appId: "1:454240655526:web:32b3ad91caf88c5fa6fc67"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;