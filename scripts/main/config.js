// ISI DENGAN PROJECT FIREBASE MILIK TEMEN-TEMEN SENDIRI
const firebaseConfig = {
  apiKey: "AIzaSyDCTTnUof2ABs1WrLQH6yokX0Xon-XhNtU",
  authDomain: "zetachat.firebaseapp.com",
  databaseURL: "https://zetachat-default-rtdb.firebaseio.com",
  projectId: "zetachat",
  storageBucket: "zetachat.appspot.com",
  messagingSenderId: "573300156255",
  appId: "1:573300156255:web:427a1b9335610b5af878ea",
  measurementId: "G-E31N6PG8SM"
};

// BIAR GA KELAMAAN PAS MAU PANGGIL NANTI
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const rdb = firebase.database();
const stg = firebase.storage();