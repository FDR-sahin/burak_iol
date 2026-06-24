import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAHXQNTYHtRUbNSHSd9m1UkjGZ0_WciTCA",
  authDomain: "burak-oil.firebaseapp.com",
  projectId: "burak-oil",
  storageBucket: "burak-oil.firebasestorage.app",
  messagingSenderId: "580261550062",
  appId: "1:580261550062:web:d3b9c113e94cad80efa0ff",
  databaseURL : "https://burak-oil-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);