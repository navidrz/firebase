// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Jcdy3IQAMQKIgE-4YloXikmgqF4vJYw",
  authDomain: "ibx1-b26f5.firebaseapp.com",
  databaseURL: "https://ibx1-b26f5-default-rtdb.firebaseio.com",
  projectId: "ibx1-b26f5",
  storageBucket: "ibx1-b26f5.appspot.com",
  messagingSenderId: "435743056532",
  appId: "1:435743056532:web:d89442af8b2d8640814a81",
  measurementId: "G-9CBB5T5KJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Replace with your own IDs! follow the guides here:
// https://docs.expo.io/versions/latest/sdk/google/#using-it-inside-of-the-expo-app
export const GOOGLE_CLIENT_ID =
  'AIzaSyAB3BDwhGBtCiU5hPiWQuc6ak19R_zjhk4'
  
