import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDmuc8ESaNSks20_V-JPKn3wEF-zPK8v9s",
  authDomain: "handy-booking-website.firebaseapp.com",
  databaseURL: "https://handy-booking-website.firebaseio.com",
  projectId: "handy-booking-website",
  storageBucket: "handy-booking-website.appspot.com",
  messagingSenderId: "51603017849",
  appId: "1:51603017849:web:9481737805fe47f7ea84a8",
  measurementId: "G-Z8CMCRYMBV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
