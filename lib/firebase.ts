import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCiyVpo8szh7S6FMj3skTpGqWlTIsRPt9Y",
  authDomain: "chessiq-2574b.firebaseapp.com",
  projectId: "chessiq-2574b",
  storageBucket: "chessiq-2574b.appspot.com", // FIXED typo here
  messagingSenderId: "64471504685",
  appId: "1:64471504685:web:e2d4329cfedb10ee0f25a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
