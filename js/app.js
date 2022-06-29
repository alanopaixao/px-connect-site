// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// // add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// // set year

// navBtn.addEventListener("click", () => {
//   console.log("oi");
// });

const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector(".sidebar");
const date = document.querySelector("#date");

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
sidebar.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

date.innerHTML = new Date().getFullYear();
