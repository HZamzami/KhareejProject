const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
// homeLink.addEventListener() {

// }


// var reads = document.querySelectorAll('.read-now');

// reads.forEach(function (read) {

//     // var readNext = read.nextSibling.innerHTML

//     var href = 'article/' + read.id;

//     read.setAttribute("href", href);
// }



// window.onload = onload();




// function onload() {

//     var reads = document.querySelectorAll('.read-now');

//     reads.forEach(function (read) {

//         // var readNext = read.nextSibling.innerHTML

//         var href = 'article/' + read.id;

//         read.setAttribute("href", href);

//     })



let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle && modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

//   js code to toggle sidebar
sidebarOpen && sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body && body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav && nav.classList.remove("active");
    }
});
