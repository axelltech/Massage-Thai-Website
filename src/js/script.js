//trans
const languageMap = {
  '/en': {
    '/galerie/': '/gallery/',
    '/preturi/': '/prices/',
    '/': '/home',
    '/despre-noi/': '/about/',
    '/regulament/': '/regulation/',
    '/termeni-conditii/': '/terms-conditions/',
    '/contact/': '/contact-us/'
  },
  '/ro': {
    '/gallery/': '/galerie/',
    '/prices/': '/preturi/',
    '/home/': '/',
    '/about/': '/despre-noi/',
    '/regulation/': '/regulament/',
    '/terms-conditions/': '/termeni-conditii/',
    '/contact-us/': '/contact/'
  }
};

const handleLanguageChange = lang => {
  const currentURL = window.location.pathname;
  const newURL = languageMap[lang][currentURL];
  if (newURL && currentURL !== newURL) {
    window.location.href = newURL;
  }
};

const addActiveClass = (buttons, urlMap) => {
  const currentURL = window.location.pathname;
  buttons.forEach(button => {
    const lang = Object.keys(urlMap).find(
      key => currentURL === key || urlMap[key][currentURL]
    );
    button.classList.toggle('active', lang === button.dataset.lang);
  });
};

const enButtons = document.querySelectorAll('.enButton');
const roButtons = document.querySelectorAll('.roButton');

addActiveClass(enButtons, languageMap['/en']);
addActiveClass(roButtons, languageMap['/ro']);

enButtons.forEach(button => {
  button.addEventListener('click', () => {
    addActiveClass(enButtons, languageMap['/en']);
    handleLanguageChange('/en');
  });
});

roButtons.forEach(button => {
  button.addEventListener('click', () => {
    addActiveClass(roButtons, languageMap['/ro']);
    handleLanguageChange('/ro');
  });
});


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
      window.location.reload();
  });

  noButton.addEventListener('click', function() {
      window.location.href = 'https://www.google.com';
  });
});

//lang-trans

//navbar
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.content");
const buttons = document.querySelectorAll(".button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});