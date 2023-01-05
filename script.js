// declaring variables
const hamburgerBtn = document.querySelector('.hamburger-icon');
const cancelBtn = document.querySelector('.cancel-btn');
const mainBody = document.querySelector('.main-body');
const mobileScreen = window.matchMedia('screen and (max-width:768px)');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuContent = document.querySelectorAll('.nav-items .mobile');
const menuElements = Array.from(mobileMenuContent);

// hidden function
function reverseEvent() {
  mainBody.style.display = 'block';
  mobileMenu.style.display = 'none';
}

// visible function
function displayMobileMenu() {
  if (mobileScreen.matches) {
    mainBody.style.display = 'none';
    mobileMenu.style.display = 'block';
    mobileMenu.classList.add('mobile-menu-style');
    for (let i = 0; i < menuElements.length; i += 1) {
      menuElements[i].style.display = 'block';
    }
  }
  window.addEventListener('resize', reverseEvent);
}

// hyperlinks
function chooseSection(e) {
  reverseEvent();
  const sections = e.target.classList;
  sections.forEach((section) => {
    if (section === 'portfolio') {
      window.location.href = '#portfolio';
    } else if (section === 'about') {
      window.location.href = '#about';
    } else if (section === 'contact') {
      window.location.href = '#contact';
    }
  });
}
hamburgerBtn.addEventListener('click', displayMobileMenu);
cancelBtn.addEventListener('click', reverseEvent);
for (let i = 0; i < menuElements.length; i += 1) {
  menuElements[i].addEventListener('click', chooseSection);
}

// form validation
// check if email is lowercase
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const alert = document.getElementById('alert');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    alert.classList.replace('hide', 'show');
    alert.style.color = 'red';
    alert.innerText = 'Email must be lowercase!form not sent, Please try again';
  }
});