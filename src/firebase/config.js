// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBk35ovi8xCTOIMgxGU3HkvESBQNDJh1jM',
  authDomain: 'comp-blog-89dad.firebaseapp.com',
  projectId: 'comp-blog-89dad',
  storageBucket: 'comp-blog-89dad.appspot.com',
  messagingSenderId: '275659986398',
  appId: '1:275659986398:web:3ee8222d4857bd134df94f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export { db };
