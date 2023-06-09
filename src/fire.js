import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTD28Zk72xplqMN-jb2sIDKhmD-nMDVhg",
  authDomain: "real-time-task-management.firebaseapp.com",
  projectId: "real-time-task-management",
  storageBucket: "real-time-task-management.appspot.com",
  messagingSenderId: "1054608409091",
  appId: "1:1054608409091:web:735957c7e8a3faaf634436",
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire; 
