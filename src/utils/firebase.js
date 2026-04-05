import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewai-4cd93.firebaseapp.com",
    projectId: "interviewai-4cd93",
    storageBucket: "interviewai-4cd93.firebasestorage.app",
    messagingSenderId: "590847994171",
    appId: "1:590847994171:web:6be3b3189475a558ad6f1e",
    measurementId: "G-4YRR7WD91S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }