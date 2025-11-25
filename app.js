// --- Firebase config ---
// TODO: Replace the following with your actual config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyByPdrnT3SPFi_5W_qacidTMLH84HPzHV0",
  authDomain: "login-63449.firebaseapp.com",
  projectId: "login-63449",
  storageBucket: "login-63449.firebasestorage.app",
  messagingSenderId: "254500295374",
  appId: "1:254500295374:web:fcb10ce3279b0c6b7a769f",
  measurementId: "G-9BXMZZHPL1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elements
const moreBtn = document.getElementById("more-button");
const loginModal = document.getElementById("login-modal");
const closeLoginBtn = document.getElementById("close-login");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const signInBtn = document.getElementById("login-signin");
const signUpBtn = document.getElementById("login-signup");
const googleBtn = document.getElementById("login-google");
const msgDiv = document.getElementById("login-message");

// Show modal
function openLoginModal() {
  loginModal.style.display = "block";
}
// Close modal
closeLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  msgDiv.textContent = "";
});

// Sign up
signUpBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      msgDiv.style.color = "lightgreen";
      msgDiv.textContent = "Sign up successful!";
      loginModal.style.display = "none";
      // optionally: redirect or do action
      handleAfterLogin();
    })
    .catch(error => {
      msgDiv.style.color = "lightcoral";
      msgDiv.textContent = error.message;
    });
});

// Sign in
signInBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      msgDiv.style.color = "lightgreen";
      msgDiv.textContent = "Signed in!";
      loginModal.style.display = "none";
      handleAfterLogin();
    })
    .catch(error => {
      msgDiv.style.color = "lightcoral";
      msgDiv.textContent = error.message;
    });
});

// Google login
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      loginModal.style.display = "none";
      handleAfterLogin();
    })
    .catch(error => {
      msgDiv.style.color = "lightcoral";
      msgDiv.textContent = error.message;
    });
});

// When “More” clicked
moreBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  if (!user) {
    // not logged in → show login
    openLoginModal();
  } else {
    // user is logged in → check device
    if (checkDeviceCapabilities()) {
      // ok → go to morestuff.html
      window.location.href = "morestuff.html";
    } else {
      alert("Sorry, your device is not supported for more stuff.");
    }
  }
});

// Called after login or signup
function handleAfterLogin() {
  // after login, re-trigger more logic
  if (checkDeviceCapabilities()) {
    window.location.href = "morestuff.html";
  } else {
    alert("Logged in, but device does not support more stuff.");
  }
}

// Example device capability check function
function checkDeviceCapabilities() {
  // Here you can check for whatever "capability" you mean.
  // This is just a simple example:
  if (!window.Promise) return false;
  if (!window.fetch) return false;
  if (!window.localStorage) return false;

  // Example: detect old IE
  const ua = navigator.userAgent;
  if (ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1) {
    return false;
  }

  return true;
}

// Also track login state (optional)
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User is signed in:", user.email);
  } else {
    console.log("No user is signed in.");
  }
});
