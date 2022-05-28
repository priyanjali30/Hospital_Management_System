import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
    apiKey: "AIzaSyC7NB5SYtqRsDDsOIjKN_rITuyOTzpHyAQ",
    authDomain: "hospitalmanagement-7db07.firebaseapp.com",
    databaseURL: "https://hospitalmanagement-7db07-default-rtdb.firebaseio.com",
    projectId: "hospitalmanagement-7db07",
    storageBucket: "hospitalmanagement-7db07.appspot.com",
    messagingSenderId: "566144309301",
    appId: "1:566144309301:web:357e980424d72222e5f97c",
    measurementId: "G-P0Z3K3TNZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var databases = getDatabase(app);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
