import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyBhH2tph_hSyt37yc2lpjQSldS--YuKcaU",
  authDomain: "sea-shepherd-act-project.firebaseapp.com",
  projectId: "sea-shepherd-act-project",
  storageBucket: "sea-shepherd-act-project.appspot.com",
  messagingSenderId: "749883795837",
  appId: "1:749883795837:web:5ba440b47c62a625abc414"
}

firebase.initializeApp(config)
