import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvh8gaCdvT96s4L399RPt_ojUI9ulq2w4",
  authDomain: "imoney-8ee25.firebaseapp.com",
  projectId: "imoney-8ee25",
  storageBucket: "imoney-8ee25.appspot.com",
  messagingSenderId: "209516095664",
  appId: "1:209516095664:web:407e60c3b0f4bb4141b375",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp, projectStorage };
