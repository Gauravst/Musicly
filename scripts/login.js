import { auth, login, checkUser } from "/utils/firebase.js";

const loginForm = document.querySelector("#loginForm");
const loginBtn = document.querySelector(".loginBtn")

checkUser(auth, "profile.html")

loginForm.addEventListener("submit", async (e) => {
  loading(true);
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    await login(auth, email, password);

    showToast("Login Successful");
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 2000);
  } catch (error) {
    showToast(error.message);
    loading(false);
  }
});

const showToast = (message) => {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.innerText = `${message}`;
  toast.classList.remove("hide");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 3000);
};

const loading = (load) => {
  loginBtn.innerText = load ? "Loading.." : "Login your account";
};


