// declaring variables
const hamburgerBtn = document.querySelector('.hamburger-icon');
const cancelBtn = document.querySelector('.cancel-btn');
const mainBody = document.querySelector('.main-body');
const mobileScreen = window.matchMedia('screen and (max-width:768px)');
const desktopScreen = window.matchMedia('screen and (min-width:768px)');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuContent = document.querySelectorAll('.nav-items .mobile');
const menuElements = Array.from(mobileMenuContent);

// work section variables match for screen size
const workSection = document.getElementById('project-cards-container');
function checkscreensize() {
  if (desktopScreen.matches) {
    workSection.classList.remove('project-cards-mobile');
    workSection.classList.add('project-cards');
  } else if (mobileScreen.matches) {
    workSection.classList.remove('project-cards');
    workSection.classList.add('project-cards-mobile');
  }
}
window.addEventListener('resize', checkscreensize);

// cancle mobile menu
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
const projectDetail = [
  {
    id: 1,
    name: 'Keeping track of hundreds  of components website',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-img-1.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby on rails',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-Placeholder-2.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
  {
    id: 3,
    name: 'Website Protfolio ',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-Placeholder-3.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-Placeholder-1.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-Placeholder-2.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
  {
    id: 6,
    name: 'Website Protfolio ',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'images/featured-images/project-Placeholder-3.png',
    technologies: {
      0: 'html',
      1: 'Bootstrap',
      2: 'Ruby',
    },
    linkTo_live: '#',
    linkTo_source: '#',
  },
];

// create the work section dynamically
const cards = Object.keys(projectDetail);
cards.forEach((card) => {
  const workCard = document.createElement('div');
  workCard.classList.add('work-card');

  // Add the background image to card
  const imageLink = projectDetail[card].featured_image;
  const hoverImageLink = 'images/featured-images/hover-image-placeholder.svg';
  workCard.style.background = `url(${imageLink})`;
  workCard.style.backgroundRepeat = 'no-repeat';
  workCard.style.backgroundSize = 'cover';
  workSection.appendChild(workCard);

  // create the card header and append to container
  const cardHeader = document.createElement('h4');
  cardHeader.classList.add('card-header');
  cardHeader.innerText = projectDetail[card].name;
  workCard.appendChild(cardHeader);

  // add the description section
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.innerText = projectDetail[card].description;
  workCard.appendChild(cardDescription);

  // Add the technologies list
  const technologiesContainer = document.createElement('ul');
  technologiesContainer.classList.add('card-tags');
  const techno = Object.keys(projectDetail[card].technologies);
  techno.forEach((btn) => {
    const technologylist = document.createElement('li');
    const technologyBtn = document.createElement('button');
    technologyBtn.classList.add('tag', 'blur');
    technologyBtn.innerText = projectDetail[card].technologies[btn];
    technologylist.appendChild(technologyBtn);
    technologiesContainer.appendChild(technologylist);
    workCard.appendChild(technologiesContainer);
    workCard.setAttribute('data-id', `${projectDetail[card].id}`);
  });
  // Add the button
  const actionButton = document.createElement('button');
  actionButton.classList.add('btn-max-width', 'open-popup-btn');
  actionButton.innerText = 'See Project';
  workCard.appendChild(actionButton);

  // show action button and change background on hover
  workCard.addEventListener('mouseenter', () => {
    actionButton.classList.add('show');
    workCard.style.background = `url(${hoverImageLink})`;
    workCard.style.backgroundRepeat = 'no-repeat';
    workCard.style.backgroundSize = 'cover';
  });
  // hide action button when not hovering
  workCard.addEventListener('mouseleave', () => {
    actionButton.classList.remove('show');
    workCard.style.background = `url(${imageLink})`;
    workCard.style.backgroundRepeat = 'no-repeat';
    workCard.style.backgroundSize = 'cover';
  });
});

/// popup window variables
const popupWindow = document.querySelector('#popup-window');
const popupBackground = document.querySelector('#popup-bg');
const closePopupBtn = document.querySelector('.close-popup-btn');
const hiddenSection = document.querySelector('#main-section');
// popup window elements
const projectTitle = document.querySelector('.project-title');
const popupTechnologiesContainer = document.querySelector('#tag-popup');
const popupImage = document.querySelector('.project-placeholder-img.popup');
const popupDescription = document.querySelector('.project-description');
// creat popup window desktop version
function openPopUpDesktop(id) {
  // Add content to popup
  projectTitle.innerText = projectDetail[id].name;
  const technoPopup = Object.keys(projectDetail[id].technologies);
  const popupTechnologies = document.createElement('ul');
  technoPopup.forEach((btn) => {
    popupTechnologies.classList.add('card-tags');
    const popupTechnologiesItem = document.createElement('li');
    const popupTechnologiesBtn = document.createElement('button');
    popupTechnologiesBtn.classList.add('tag-popup');
    popupTechnologiesBtn.innerText = `${projectDetail[id].technologies[btn]} `;
    popupTechnologiesItem.appendChild(popupTechnologiesBtn);
    popupTechnologies.appendChild(popupTechnologiesItem);
  });
  popupTechnologiesContainer.appendChild(popupTechnologies);
  popupImage.src = `${projectDetail[id].featured_image} `;
  popupDescription.innerText = projectDetail[id].description;
  window.scrollTo(0, 0);
  popupWindow.style.display = 'block';
  popupBackground.classList.add('popup-bg');
  hiddenSection.style.display = 'none';
}
function closePopUpDesktop() {
  window.location.href = '#portfolio';
  popupWindow.style.display = 'none';
  popupBackground.classList.remove('popup-bg');
  hiddenSection.style.display = 'block';
  popupTechnologiesContainer.innerHTML = '';
}
const workCard = document.querySelectorAll('.work-card');
workCard.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('data-id');
    openPopUpDesktop(id);
  });
});
closePopupBtn.addEventListener('click', closePopUpDesktop);
