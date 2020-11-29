import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeY4taC8IBU2tJJF3Rf-GRbWws8t4nlcQ",
    authDomain: "whatsapp-clone-teamwork.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-teamwork.firebaseio.com",
    projectId: "whatsapp-clone-teamwork",
    storageBucket: "whatsapp-clone-teamwork.appspot.com",
    messagingSenderId: "368504895413",
    appId: "1:368504895413:web:14c1697d34649aae910bfc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;