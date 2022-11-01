import { initializeApp }    from "firebase/app";
import { getAuth }          from 'firebase/auth'
import { getFirestore }     from 'firebase/firestore/lite'
import { getAnalytics }     from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0igp_2i8J_yEPvPPN8cQUFsxMYGxFQuY",
  authDomain: "mantencion-vehicular.firebaseapp.com",
  projectId: "mantencion-vehicular",
  storageBucket: "mantencion-vehicular.appspot.com",
  messagingSenderId: "1078883410909",
  appId: "1:1078883410909:web:515f3ba8552c50ddb10c34",
  measurementId: "G-CXC1N0K7FK"
};

export const FirebaseApp       = initializeApp( firebaseConfig );
export const FirebaseAuth      = getAuth( FirebaseApp );
export const FirebaseDB        = getFirestore( FirebaseApp );
const FirebaseAnalytics        = getAnalytics( FirebaseApp );