import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyB63EY_pK4L6e-9i_FOetAmySm7yHOVlcY",
    authDomain: "handybooking-eadbe.firebaseapp.com",
    databaseURL: "https://handybooking-eadbe.firebaseio.com",
    projectId: "handybooking-eadbe",
    storageBucket: "handybooking-eadbe.appspot.com",
    messagingSenderId: "1052830495299",
    appId: "1:1052830495299:web:28533f098ff41aa09f1af6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };