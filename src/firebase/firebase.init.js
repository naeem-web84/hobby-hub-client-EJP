import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCaI9y_tm_FaaNVMZJiXT16JwA1evkADPY",
  authDomain: "hobby-hub-app-bb214.firebaseapp.com",
  projectId: "hobby-hub-app-bb214",
  storageBucket: "hobby-hub-app-bb214.appspot.com",  
  messagingSenderId: "280081080790",
  appId: "1:280081080790:web:180a578278922074378477"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
