// JavaScript for responsive navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
        }
    });
});


// JS for checking if user if login or not and showing Login/Logout on basis of his state in navbar

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLm_yXfa58C9yCtoj4PE0YNxXgCY3RY7Q",
    authDomain: "dcpsnps-fe479.firebaseapp.com",
    projectId: "dcpsnps-fe479",
    storageBucket: "dcpsnps-fe479.appspot.com",
    messagingSenderId: "144799129608",
    appId: "1:144799129608:web:9a030aef68f2f20293b1bd",
    measurementId: "G-JWK7ZTTS78",
    databaseURL: "https://dcpsnps-fe479-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check authentication state on page load
onAuthStateChanged(auth, (user) => {
    const loginNav = document.getElementById('login-nav');
    const logoutNav = document.getElementById('logout-nav');

    if (user) {
        console.log('User is signed in');
        loginNav.style.display = 'none';
        logoutNav.style.display = 'block';

        if (window.location.pathname === "/login.html" || window.location.pathname === "/") {
            window.location.href = "postshow.html"; // Redirect authenticated users away from the login page
        }
    } else {
        console.log('User is signed out');
        loginNav.style.display = 'block';
        logoutNav.style.display = 'none';

        if (window.location.pathname !== "/index.html") {
            window.location.href = "index.html"; // Redirect unauthenticated users to the login page
        }
    }
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', async () => {
    try {
        await signOut(auth);
        alert('Successfully logged out.');
        window.location.href = 'index.html'; // Redirect to home page after logout
    } catch (error) {
        console.error('Error during logout:', error);
        alert('Failed to log out.');
    }
});
