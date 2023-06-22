import { auth, db, signup, checkUser } from "/utils/firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
const signUpForm = document.querySelector("#signUpForm");
const signupBtn = document.querySelector(".signupBtn");

checkUser(auth, "profile.html")

signUpForm.addEventListener("submit", async (e) => {
  console.log("clicked")
  loading(true);
  e.preventDefault();

  const name = signUpForm.name.value;
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  try {
    await signup(auth, email, password);

    await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      password: password,
      profile: "",
    });

    showToast("Signup Successful");
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
  signupBtn.innerText = load ? "Loading.." : "Create an account";
};


