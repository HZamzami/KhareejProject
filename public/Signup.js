

const wrapper = document.querySelector(".wrapper"),
    signupHeader = document.querySelector(".sing-up-header"),
    loginHeader = document.querySelector(".log-in-header");

loginHeader && loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
    console.log("clicked");
});
signupHeader && signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
    console.log("clicked");

});