const signUpInterface = document.getElementById("signUp");
const signInInterface = document.getElementById("signIn");
const container = document.getElementById("container");
const signUp = document.getElementById("signUpClick");
const signIn = document.getElementById("signInClick");

signUpInterface.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInInterface.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUp.addEventListener("click", () => {
  // Function
});

signIn.addEventListener("click", () => {
  // Function
});
