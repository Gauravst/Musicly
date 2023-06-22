import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { config } from "/config.js";

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.A_D,
  projectId: config.P_ID,
  storageBucket: config.S_B,
  messagingSenderId: config.M_S_ID,
  appId: config.APP_ID,
  measurementId: config.M_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (auth, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const login = async (auth, email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const checkUser = async (auth, url) => {
  return await onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = url;
    } else {
    }
  });
};

export { auth, db, signup, login, checkUser };
