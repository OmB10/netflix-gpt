// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmrsfNeXowbPC0zbj8wqd-5VF44OXaaFE",
    authDomain: "netflix-gpt-om.firebaseapp.com",
    projectId: "netflix-gpt-om",
    storageBucket: "netflix-gpt-om.appspot.com",
    messagingSenderId: "916940030669",
    appId: "1:916940030669:web:b1ba759e5750a5c306df84",
    measurementId: "G-XDX5WMLVF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
