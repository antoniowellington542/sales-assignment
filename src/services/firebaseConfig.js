import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx23-n8NbddMUZklwmfqhxa6Ip_ddP0qY",
  authDomain: "solid-outlook-341217.firebaseapp.com",
  projectId: "solid-outlook-341217",
  storageBucket: "solid-outlook-341217.appspot.com",
  messagingSenderId: "178815443159",
  appId: "1:178815443159:web:b05712b5163eed76901092",
  measurementId: "G-YVN73WET5X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);