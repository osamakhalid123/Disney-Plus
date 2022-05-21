import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// import firebase from "firebase"




// import { initializeApp } from "firebase/app";







const firebaseConfig = {
  apiKey: "AIzaSyAAkhFwyq9zYwtsubzJGFv1TYcdNmEVD9E",
  authDomain: "disney-plus-1ae40.firebaseapp.com",
  projectId: "disney-plus-1ae40",
  storageBucket: "disney-plus-1ae40.appspot.com",
  messagingSenderId: "305629594190",
  appId: "1:305629594190:web:d58ff177e58a18eaa4f91f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db=app.firestore();
// const auth=firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage=firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,storage,app};
export default db;
