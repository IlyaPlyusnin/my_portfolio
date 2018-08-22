const hamLines = document.querySelectorAll(".ham-line");
var spun = false;
const ham = document.querySelector(".head-btn");
const menu = document.querySelector(".menu");
const menuPhoto = document.querySelector(".my-photo");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

ham.addEventListener("click", spin);

function spin() {
  if (spun) {
    menuPhoto.classList.remove("show");
    navMenu.classList.remove("show");
    menu.classList.remove("show");
    ham.classList.remove("show");
    spun = false;
    for (let i = 0; i < hamLines.length; i++) {
      hamLines[i].classList.remove("show");
    }
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("show");
    }
  } else {
    menuPhoto.classList.add("show");
    navMenu.classList.add("show");
    menu.classList.add("show");
    ham.classList.add("show");
    spun = true;
    for (let i = 0; i < hamLines.length; i++) {
      hamLines[i].classList.add("show");
    }
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.add("show");
    }
  }
}
