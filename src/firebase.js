import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2JQyGW3-Cz9gzVuxuFpbaDicGp43-m1Y",
  authDomain: "tauji-33368.firebaseapp.com",
  projectId: "tauji-33368",
  storageBucket: "tauji-33368.firebasestorage.app",
  messagingSenderId: "389025182777",
  appId: "1:389025182777:web:343eb88c3d5735abcd09e8",
  measurementId: "G-8Y2861BZ93",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
