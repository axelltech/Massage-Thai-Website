//navbar
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.content");
const headerNav = document.querySelectorAll(".nav-content");
const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

const executeCodes = () => {
  if (document.cookie.includes("codingPosii")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      if (button.id == "acceptBtn") {
        document.cookie = "cookieBy= codingPosii; max-age=" + 60 * 60 * 24 * 30;
      } else {
      }
    });
  });
};

window.addEventListener("load", executeCodes);

const applyBorder = () => {
  const windowWidth = window.innerWidth;
  const targetWidth = 1020;
  if (windowWidth > targetWidth) {
    document.addEventListener("scroll", () => {
      let scroll_position = window.scrollY;
      if (scroll_position > 10) {
        headerNav.forEach((elem) => {
          elem.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
        });
      } else {
        headerNav.forEach((elem) => {
          elem.style.borderBottom = "0px";
        });
      }
    });
  } else {
    document.addEventListener("scroll", () => {
      let scroll_position = window.scrollY;
      if (scroll_position > 10) {
        headerNav.forEach((elem) => {
          elem.style.borderBottom = "0px";
        });
      }
    });
  }
};
window.addEventListener("resize", applyBorder);
applyBorder();

//jQuery to switch logic and place
$(document).ready(function () {
  $.fancybox.defaults.hash = false;
});
const options = {
  Hash: false,
};
