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


document.addEventListener('DOMContentLoaded', function() {
  const ageModal = document.getElementById('ageModal');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Verifica daca utilizatorul a dat deja un raspuns inainte
  if (localStorage.getItem('ageConfirmed') === 'true') {
      ageModal.style.display = 'none'; // Ascunde modalul
      document.getElementById('mainContent').style.display = 'block'; // Afiseaza continutul principal
  } else {
      // Daca utilizatorul nu a dat un raspuns inainte, afiseaza modalul
      ageModal.style.display = 'block';
      document.body.classList.add('modal-open'); // Adauga clasa pentru dezactivarea scroll-ului
    }
    
    yesButton.addEventListener('click', function() {
      ageModal.style.display = 'none'; // Ascunde modalul
      document.getElementById('mainContent').style.display = 'block'; // Afiseaza continutul principal
      // Salveaza raspunsul utilizatorului in localStorage
      localStorage.setItem('ageConfirmed', 'true');
      document.body.classList.remove('modal-open'); // Elimina clasa pentru reactivarea scroll-ului
  });

  noButton.addEventListener('click', function() {
      window.location.href = 'https://www.google.com';
  });
});



//jQuery to switch logic and place
$(document).ready(function () {
  $.fancybox.defaults.hash = false;
});
const options = {
  Hash: false,
};
