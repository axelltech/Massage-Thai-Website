document.addEventListener('DOMContentLoaded', function() {
  const ageModal = document.getElementById('ageModal');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  if (localStorage.getItem('ageConfirmed') === 'true') {
      ageModal.style.display = 'none'; 
      document.getElementById('mainContent').style.display = 'block'; 
  } else {
      ageModal.setAttribute('style', 'display:block !important');
      document.body.classList.add('modal-open');
    }
    yesButton.addEventListener('click', function() {
      ageModal.style.display = 'none'; // 
      document.getElementById('mainContent').style.display = 'block';
      localStorage.setItem('ageConfirmed', 'true');
      document.body.classList.remove('modal-open'); 
  });

  noButton.addEventListener('click', function() {
      window.location.href = 'https://www.google.com';
  });
});

//navbar
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.content");
const headerNav = document.querySelectorAll(".nav-content");
const buttons = document.querySelectorAll(".button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


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
// $(document).ready(function () {
//   $.fancybox.defaults.hash = false;
// });
// const options = {
//   Hash: false,
// };
