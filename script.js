const hamburgerBtn = document.querySelector('.hamburger-icon');
const cancelBtn = document.querySelector('.cancel-btn');
const mainBody = document.querySelector('.main-body');
const mobileScreen = window.matchMedia('screen and (max-width:768px)');
const desktopScreen = window.matchMedia('screen and (min-width:768px)');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuContent = document.querySelectorAll('.nav-items .mobile');
const menuElements = Array.from(mobileMenuContent);

// popup window
const openPopupBtn = document.querySelectorAll('.open-popup-btn');
const popupWindow = document.querySelector('#popup-window');
const popupBackground = document.querySelector('#popup-bg');
const closePopupBtn = document.querySelector('.close-popup-btn');
const hiddenSection = document.querySelector('main-section');

function reverseEvent() {
  mainBody.style.display = 'block';
  mobileMenu.style.display = 'none';
}

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

// Project detail popup window
// store popup window data
const projectDetail = {
  id: 1,
  name: 'Keeping track of hundreds  of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  featured_image: 'images/featured-images/project-img-1.png',
  technologies: {
    first: 'html',
    second: 'Bootstrap',
    third: 'Ruby on rails',
  },
  linkTo_live: '#',
  linkTo_source: '#',
};

// creat popup window desktop version
function openPopUpDesktop() {
  window.scrollTo(0, 0);
  popupWindow.style.display = 'block';
  popupBackground.classList.add('popup-bg');
  hiddenSection.style.display = 'none';
}
function closePopUpDesktop() {
  window.location.href = '#portfolio';
  popupWindow.style.display = 'none';
  popupBackground.classList.remove('popup-bg');
}
if (desktopScreen.matches) {
  for (let i = 0; i < openPopupBtn.length; i += 1) {
    openPopupBtn[i].addEventListener('click', openPopUpDesktop);
  }

  closePopupBtn.addEventListener('click', closePopUpDesktop);
}