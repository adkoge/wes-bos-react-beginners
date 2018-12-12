import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrKZRVXWzLBXzIfwKXjLIMmwmAChuOBkw",
  authDomain: "catch-of-the-day-9bbda.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-9bbda.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
