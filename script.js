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

// Preserving data in browser
g
const inputData = {};
const nameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment-input');
// store data
function storeInput() {
  inputData.name = nameInput.value;
  inputData.email = emailInput.value;
  inputData.comment = commentInput.value;
  const jsonData = JSON.stringify(inputData);
  window.localStorage.setItem('formData', jsonData);
}
// listen for change
nameInput.addEventListener('change', storeInput);
emailInput.addEventListener('change', storeInput);
commentInput.addEventListener('change', storeInput);

// function to check if not null
function isRealValue(obj) {
  return obj && obj !== 'null' && obj !== 'undefined';
}

// get data from storage
function fetchData() {
  const data = localStorage.getItem('formData');
  const parseData = JSON.parse(data);

  // check if not null
  if (isRealValue(parseData)) {
    nameInput.value = parseData.name;
    emailInput.value = parseData.email;
    commentInput.value = parseData.comment;
  }
}
window.onload = () => {
  fetchData();
};