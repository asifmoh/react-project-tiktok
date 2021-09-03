import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAF36W8jO_plbJEyCC1hPKDhsmcqcdbjAg",
  authDomain: "tik-tok-clone-fb20e.firebaseapp.com",
  projectId: "tik-tok-clone-fb20e",
  storageBucket: "tik-tok-clone-fb20e.appspot.com",
  messagingSenderId: "1086011833057",
  appId: "1:1086011833057:web:2cc445800734fa461815a0",
  measurementId: "G-L1GGVC493G"
};
const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
