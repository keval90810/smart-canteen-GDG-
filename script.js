import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMnL9mGuIP-yl_J9X0Cp79Xa0xwjyBc78",
  authDomain: "login-68e3b.firebaseapp.com",
  projectId: "login-68e3b",
  storageBucket: "login-68e3b.appspot.com",
  messagingSenderId: "396330798747",
  appId: "1:396330798747:web:526fe9c456bbe86418003e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔐 Admin email
const ADMIN_EMAIL = "kevalhingu704@gmail.com";

// DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const mainBtn = document.getElementById("main-btn");
const msg = document.getElementById("msg");

const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");
const showReset = document.getElementById("show-reset");
const formTitle = document.getElementById("form-title");

let currentForm = "login";

// ================= Switch forms =================
function switchForm(form) {
  currentForm = form;

  emailInput.value = "";
  passwordInput.value = "";
  usernameInput.value = "";
  msg.innerText = "";

  showLogin.classList.remove("active");
  showSignup.classList.remove("active");
  showReset.classList.remove("active");

  if (form === "login") {
    formTitle.innerText = "Login";
    mainBtn.innerText = "Login";
    mainBtn.className = "btn login-btn";
    showLogin.classList.add("active");

    passwordInput.style.display = "block";
    usernameInput.style.display = "none";

  } else if (form === "signup") {
    formTitle.innerText = "Sign Up";
    mainBtn.innerText = "Sign Up";
    mainBtn.className = "btn signup-btn";
    showSignup.classList.add("active");

    passwordInput.style.display = "block";
    usernameInput.style.display = "block";

  } else if (form === "reset") {
    formTitle.innerText = "Reset Password";
    mainBtn.innerText = "Send Recovery Link";
    mainBtn.className = "btn reset-btn";
    showReset.classList.add("active");

    passwordInput.style.display = "none";
    usernameInput.style.display = "none";
  }
}

showLogin.onclick = () => switchForm("login");
showSignup.onclick = () => switchForm("signup");
showReset.onclick = () => switchForm("reset");

// ================= Main button =================
mainBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const username = usernameInput.value.trim();

  msg.innerText = "";
  mainBtn.disabled = true;

  try {
    if (currentForm === "login") {
      if (!email || !password) throw new Error("Enter email & password");

      const cred = await signInWithEmailAndPassword(auth, email, password);

      if (cred.user.email === ADMIN_EMAIL) {
        window.location.href = "admin.html";
      } else {
        window.location.href = "home_page.html";
      }

    } else if (currentForm === "signup") {
      if (!email || !password || !username) throw new Error("All fields required");

      await createUserWithEmailAndPassword(auth, email, password);
      msg.innerText = "Signup successful  Please login";
      setTimeout(() => switchForm("login"), 1500);

    } else if (currentForm === "reset") {
      if (!email) throw new Error("Enter email to reset password");

      await sendPasswordResetEmail(auth, email);
      msg.innerText = "Recovery email sent ";
    }
  } catch (err) {
    msg.innerText = err.message.replace("Firebase:", "");
  } finally {
    mainBtn.disabled = false;
  }
});

// ================= Auth guard =================
onAuthStateChanged(auth, user => {
  const path = window.location.pathname;

  // Not logged in → go to login
  if (!user) {
    if (path.includes("home_page.html") || path.includes("admin.html")) {
      window.location.href = "index.html";
    }
    return;
  }

  // Logged in BUT not admin → block admin page
  if (path.includes("admin.html") && user.email !== ADMIN_EMAIL) {
    window.location.href = "home_page.html";
  }
});


// ================= Logout =================
window.logout = () => {
  signOut(auth).then(() => window.location.href = "index.html");
};

// Default
switchForm("login");
