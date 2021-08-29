const firebase=require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCuO_G4DdqITLbvs4-0RjY2iLGCC4DVNog",
    authDomain: "nodebl.firebaseapp.com",
    databaseURL: "https://nodebl-default-rtdb.firebaseio.com",
    projectId: "nodebl",
    storageBucket: "nodebl.appspot.com",
    messagingSenderId: "625741153549",
    appId: "1:625741153549:web:d863182a5535f6e57e1c44",
    measurementId: "G-KYDB8HZCNX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// creates users from collection users
const User = db.collection('Posts');
module.exports = User;