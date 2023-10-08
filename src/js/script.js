//navbar
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.content');
const headerNav = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;
  if(scroll_position > 50) {
    header.style.backgroundColor = "#000000";
    headerNav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
  } else {
    header.style.backgroundColor = "transparent";
    headerNav.style.borderBottom  = "0px";
  }
})

// //jQuery to switch logic and place
// $(document).ready(function() {
//     $.fancybox.defaults.hash = false;
//   });
// const options = {
//     Hash: false,
//   };
