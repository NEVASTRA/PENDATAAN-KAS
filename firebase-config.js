import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC97LwnbOMTAoN9bAPg78XedYlkBXH2_rA",
  authDomain: "nevastra.firebaseapp.com",
  databaseURL: "https://nevastra-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nevastra",
  storageBucket: "nevastra.firebasestorage.app",
  messagingSenderId: "464439721083",
  appId: "1:464439721083:web:6f91107a6a027103f076de",
  measurementId: "G-3S4QMH5W6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { app, analytics, db, ref, push, onValue };
